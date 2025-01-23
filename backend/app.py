from flask import Flask, request, jsonify
import tensorflow as tf

app = Flask(_name_)

# Load the model
model = tf.keras.models.load_model('alzheimer_mobilenet_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = data['features']
    prediction = model.predict([features])
    return jsonify({'prediction': prediction.tolist()})

if _name_ == '_main_':
    app.run(debug=True)