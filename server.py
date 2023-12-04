from flask import Flask, request, render_template, jsonify
import util

app = Flask(__name__)


@app.route('/predict_sales', methods=['POST'])
def predict_sales():
    # Assuming the ARIMA model needs a start and end date for prediction
    start_date = request.form['start_date']
    end_date = request.form['end_date']

    response = jsonify({
        'sales_forecast': util.predict_sales(start_date, end_date)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


@app.route('/')
def welcome():
    return render_template('index.html')


@app.route('/home')
def find_search():
    return render_template('index.html')


if __name__ == "__main__":
    print("Starting Python Flask Server For Sales Forecasting...")
    util.load_saved_artifacts()
    app.run(debug=True)
