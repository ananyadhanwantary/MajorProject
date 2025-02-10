# from flask import Flask, request, jsonify
# import torch
# import torch.nn as nn
# import torchvision.transforms as transforms
# from PIL import Image
# import tensorflow as tf
# from transformers import ViTFeatureExtractor, ViTForImageClassification
# from datasets import load_dataset
# import io

# app = Flask(__name__)

# # Load model (example with ResNet50 in PyTorch)
# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# model = torch.hub.load('pytorch/vision:v0.10.0', 'resnet50', pretrained=True)
# model.fc = nn.Linear(2048, 5)  # Assuming 5 classes for DR classification
# model.load_state_dict(torch.load("diabetic_retinopathy_resnet50.pth", map_location=device))
# model.to(device)
# model.eval()

# # Define transformations
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
# ])

# @app.route("/predict", methods=["POST"])
# def predict():
#     if "file" not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400
    
#     file = request.files["file"]
#     img = Image.open(io.BytesIO(file.read()))
#     img = transform(img).unsqueeze(0).to(device)
    
#     with torch.no_grad():
#         output = model(img)
#         prediction = torch.argmax(output, dim=1).item()
    
#     return jsonify({"prediction": int(prediction)})

# @app.route("/health", methods=["GET"])
# def health_check():
#     return jsonify({"status": "API is running"})

# if __name__ == "__main__":
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS  # ✅ Add CORS to handle frontend requests
# import torch
# import torch.nn as nn
# import torchvision.transforms as transforms
# from PIL import Image
# import io

# app = Flask(__name__)
# CORS(app)  # ✅ Allow requests from React frontend

# # Load PyTorch Model
# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# model = torch.hub.load("pytorch/vision:v0.10.0", "resnet50", pretrained=True)
# model.fc = nn.Linear(2048, 5)  # Assuming 5 classes for DR classification
# model.load_state_dict(torch.load("diabetic_retinopathy_resnet50.pth", map_location=device))
# model.to(device)
# model.eval()

# # Define Image Transformations
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
# ])

# @app.route("/predict", methods=["POST"])
# def predict():
#     if "file" not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400

#     file = request.files["file"]
#     img = Image.open(io.BytesIO(file.read()))
#     img = transform(img).unsqueeze(0).to(device)  # ✅ Convert image properly

#     with torch.no_grad():
#         output = model(img)
#         prediction = torch.argmax(output, dim=1).item()

#     return jsonify({"prediction": int(prediction)})  # ✅ Return prediction as JSON

# @app.route("/health", methods=["GET"])
# def health_check():
#     return jsonify({"status": "API is running"})

# if __name__ == "__main__":
#     app.run(debug=True)

# import torch
# import torchvision.models as models
# import torch.nn as nn
# from flask import Flask, request, jsonify
# from PIL import Image
# import torchvision.transforms as transforms

# app = Flask(__name__)

# # Define the model
# model = models.resnet152(pretrained=False)  # Don't load default weights
# num_ftrs = model.fc.in_features
# model.fc = nn.Linear(num_ftrs, 5)  # Assuming 5 classes, modify if needed

# # Load checkpoint
# checkpoint_path = "classifier.pth"
# checkpoint = torch.load(checkpoint_path, map_location=torch.device('cpu'))
# model.load_state_dict(checkpoint["model_state_dict"], strict=False)  # Allow some mismatch
# model.eval()  # Set to evaluation mode

# # Define transformations for the input image
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
# ])

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         file = request.files['file']
#         image = Image.open(file).convert('RGB')
#         image = transform(image).unsqueeze(0)  # Add batch dimension
        
#         with torch.no_grad():
#             output = model(image)
#             _, predicted = torch.max(output, 1)
        
#         return jsonify({'prediction': predicted.item()})
#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)


import torch
import torchvision.models as models
import torch.nn as nn
from flask import Flask, request, jsonify
from flask_cors import CORS  # To prevent CORS issues
from PIL import Image
import torchvision.transforms as transforms
import io  # For handling image file input

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Load the model
model = models.resnet152(pretrained=False)  # Don't load default weights
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 5)  # Adjust classes if needed

# Load checkpoint safely
checkpoint_path = "classifier.pth"
try:
    checkpoint = torch.load(checkpoint_path, map_location=torch.device('cpu'))
    if "model_state_dict" in checkpoint:
        model.load_state_dict(checkpoint["model_state_dict"], strict=False)
    else:
        raise ValueError("Invalid checkpoint format: Missing 'model_state_dict'")
    model.eval()  # Set to evaluation mode
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    exit(1)  # Stop execution if model fails to load

# Define image transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if a file is in the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in request'}), 400

        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400

        print(f"File received: {file.filename}")

        # Read and process the image
        image = Image.open(io.BytesIO(file.read())).convert('RGB')
        print("Image successfully opened.")

        image = transform(image).unsqueeze(0)  # Convert to tensor & add batch dim
        print(f"Transformed image shape: {image.shape}")

        # Perform inference
        with torch.no_grad():
            output = model(image)
            _, predicted = torch.max(output, 1)

        print(f"Model Prediction: {predicted.item()}")
        return jsonify({'prediction': int(predicted.item())})

    except Exception as e:
        print(f"Error: {e}")  # Log error for debugging
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
