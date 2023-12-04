import pickle
from datetime import datetime

import pandas as pd

__model = None
__last_train_date = None


def predict_sales(start_date, end_date):
    # Convert string dates to datetime objects
    start_date = datetime.strptime(start_date, '%Y-%m-%d')
    end_date = datetime.strptime(end_date, '%Y-%m-%d')

    # Calculate the number of steps for the forecast
    number_of_steps = (end_date - __last_train_date).days

    if number_of_steps <= 0:
        raise ValueError(
            "End date must be after the last date in the training data")

    # Make prediction using the pmdarima model
    prediction, confint = __model.predict(
        n_periods=number_of_steps, return_conf_int=True)
    return prediction, confint


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __model
    global __last_train_date
    if __model is None:
        with open('./artifacts/sales_forecast_model.pickle', 'rb') as f:
            __model = pickle.load(f)

        endog = pd.read_csv('./artifacts/arima_endog.csv', index_col=0, parse_dates=True)

        # Used to calculate the number of steps for the forecast
        __last_train_date = endog.index[-1]

    print("loading saved artifacts...done")
    print("Last train date: ", __last_train_date)


if __name__ == '__main__':
    load_saved_artifacts()
    # print(__model.arima_res_.data.endog)
    # Example usage
    print(predict_sales('2017-08-27', '2017-09-10'))
