import React, { useState } from "react";

const UploadComponent = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [detectionResult, setDetectionResult] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    // Simulate detection result for demonstration purposes
    setDetectionResult("No signs of infection detected in the uploaded images.");
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        color: "#2c3e50",
        backgroundColor: "#eef2f7",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Welcome Section */}
      <section
        style={{
          backgroundColor: "#34495e",
          color: "white",
          padding: "40px 30px",
          borderRadius: "10px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Retinal Disease Detection
        </h1>
        <p style={{ fontSize: "1.2rem", margin: 0 }}>
          Upload retinal images and let our AI detect any signs of infection.
        </p>
      </section>

      {/* Upload Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "30px 20px",
          borderRadius: "10px",
          marginBottom: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", textAlign: "center" }}>
          Upload Retinal Images
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "400px",
            }}
          />
          <button
            style={{
              backgroundColor: "#1abc9c",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#16a085")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1abc9c")}
            onClick={handleAnalyze}
          >
            Analyze Images
          </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {uploadedImages.map((image, index) => (
            <div
              key={index}
              style={{
                width: "300px",
                height: "200px",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                alt={`Uploaded Retina ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {detectionResult && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#f1f2f6",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Detection Result</h3>
            <p style={{ fontSize: "1.2rem", color: "#2c3e50" }}>{detectionResult}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default UploadComponent;
