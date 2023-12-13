from flask import Flask, request, render_template, jsonify
import util
import pandas as pd

app = Flask(__name__)


@app.route("/predict_sales", methods=["GET"])
def predict_sales():
    # Assuming the ARIMA model needs a start and end date for prediction
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")

    prediction = util.predict_sales(start_date, end_date)
    forcase_list = pd.DataFrame(
        {
            "x": prediction.index.strftime("%Y-%m-%d"),
            "y": prediction,
        }
    ).to_dict("records")

    response = jsonify({"sales_forecast": forcase_list})
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


@app.route("/")
def welcome():
    return render_template("index.html")


@app.route("/home")
def find_search():
    return render_template("index.html")


util.load_saved_artifacts()

if __name__ == "__main__":
    print("Starting Python Flask Server For Sales Forecasting...")
    app.run(debug=True)
