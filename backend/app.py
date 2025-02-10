from flask import Flask, request, jsonify
import tensorflow as tf

app = Flask(__name__)

# Load the model
model = tf.keras.models.load_model('diabetic_retinopathy_resnet50.pth')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = data['features']
    prediction = model.predict([features])
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '_main_':
    app.run(debug=True)
    