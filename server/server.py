from flask import Flask, request, jsonify
import util
app = Flask(__name__)
@app.route('/')
def home():
    return "Welcome to the House Price Prediction API!"


@app.route('/get_location_names')
#in order to create a dropdown for locations
#creating a routine to get all the location names
def get_location_names():
    #way to return all the locations
   response = jsonify({
       'locations': util.get_location_names()
   })
   response.headers.add('Access-Control-Allow-Origin', '*')   
   return response 

@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():
    data = request.form
    total_sqft = float(data['total_sqft'])
    location = data['location']
    bhk = int(data['bhk'])
    bath = int(data['bath'])

    #calling the predict price function from util file
    price = util.get_estimated_price(location, total_sqft, bhk, bath)
    
    response = jsonify({
        'estimated_price': price
    })
    response.headers.add('Access-Control-Allow-Origin', '*')   
    return response


if __name__ == "__main__":
    print("Starting server...")
    app.run(debug=True, host='0.0.0.0', port=5000)