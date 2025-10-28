import json 
import os
import pickle
import pandas as pd
import numpy as np
#creating three global variables
__locations = None
__data_columns = None
__model = None





#def load_saved_artifacts():
#    print("Loading saved artifacts...start")
#    global __locations
#    global __data_columns

#    with open("./artifacts/columns.json", "r") as f:
#        __data_columns = json.load(f)["data_columns"]
#        __locations = __data_columns[3:]  # first 3 columns are sqft, bath, bhk
#        
#    global __model
#    with open("./artifacts/banglore_home_prices_model.pickle",'rb') as f:
#        __model = pickle.load(f)
#    print("Loading saved artifacts...done")


#   global __locations, __data_columns, __model
#    if __data_columns is not None and __model is not None:
#     return

#    base_dir = os.path.dirname(__file__)
#    artifacts_dir = os.path.join(base_dir, "artifacts")
#    columns_path = os.path.join(artifacts_dir, "columns.json")
#    model_path = os.path.join(artifacts_dir, "banglore_home_prices_model.pickle")
#
#    with open(columns_path, "r", encoding="utf-8") as f:
#        __data_columns = json.load(f)["data_columns"]
#        # first 3 columns are typically sqft, bath, bhk
#        __locations = __data_columns[3:]

#    with open(model_path, "rb") as f:
#        __model = pickle.load(f)

#def get_location_names():
 #   if __locations is None:
 #       load_saved_artifacts()
 #   return __locations

#def get_estimated_price(location, sqft, bath, bhk):
#   if __data_columns is None or __model is None:
#        load_saved_artifacts()

#try:
#       loc_index = __data_columns.index(location.lower())
#except ValueError:
#        loc_index = -1

#x = np.zeros(len(__data_columns))
#x[0] = float(sqft)
#x[1] = float(bath)
#x[2] = float(bhk)
#if loc_index >= 0:
#        x[loc_index] = 1


 #return round(float(__model.predict([x])[0]), 2)



#if __name__ == "__main__":
#   load_saved_artifacts()
#  # print(get_location_names())
#   print(get_location_names()[:10])

#   print(get_estimated_price("1st Phase JP Nagar", 2000, 3, 3))
#   print(get_estimated_price("indira nagar", 1000, 2, 2))
#    # You can add test code here if needed.
def load_saved_artifacts():
    print("Loading saved artifacts...start")

    global __locations
    global __data_columns
    global __model

    base_dir = os.path.dirname(__file__)
    artifacts_dir = os.path.join(base_dir, "artifacts")

    columns_path = os.path.join(artifacts_dir, "columns.json")
    model_path = os.path.join(artifacts_dir, "banglore_home_prices_model.pickle")

    with open(columns_path, "r", encoding="utf-8") as f:
        __data_columns = json.load(f)["data_columns"]
        __locations = __data_columns[3:]  # first 3 columns are sqft, bath, bhk

    with open(model_path, "rb") as f:
        __model = pickle.load(f)

    print("Loading saved artifacts...done")


def get_location_names():
    global __locations
    if __locations is None:
        load_saved_artifacts()
    return __locations


def get_estimated_price(location, sqft, bath, bhk):
    global __data_columns
    global __model

    if __data_columns is None or __model is None:
        load_saved_artifacts()

    try:
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = float(sqft)
    x[1] = float(bath)
    x[2] = float(bhk)
    if loc_index >= 0:
        x[loc_index] = 1

    return round(float(__model.predict([x])[0]), 2)


if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names()[:10])
    print(get_estimated_price("1st Phase JP Nagar", 1000, 2, 2))
    print(get_estimated_price("Indira Nagar", 1000, 2, 2))
    