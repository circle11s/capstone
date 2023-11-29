import pickle
from datetime import datetime
import pandas as pd
from pmdarima.arima import ARIMA

__model = None

def predict_sales(start_date, end_date):
    # Convert string dates to datetime objects
    start_date = datetime.strptime(start_date, '%Y-%m-%d')
    end_date = datetime.strptime(end_date, '%Y-%m-%d')

    # Calculate the number of steps for the forecast
    last_train_date = __model.arima_res_.data.endog.index[-1]
    number_of_steps = (end_date - last_train_date).days

    if number_of_steps <= 0:
        raise ValueError("End date must be after the last date in the training data")

    # Make prediction using the pmdarima model
    prediction, confint = __model.predict(n_periods=number_of_steps, return_conf_int=True)
    return prediction, confint

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __model
    if __model is None:
        with open('./artifacts/sales_forecast_model.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")

if __name__ == '__main__':
    load_saved_artifacts()
     # Example usage
    print(predict_sales('2017-08-27', '2017-09-10'))
