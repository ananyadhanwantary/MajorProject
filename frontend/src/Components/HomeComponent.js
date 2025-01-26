import React from "react";
import { useNavigate } from "react-router-dom"; 


const HomeComponent = () => {
  const navigate=useNavigate();
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        color: "#2c3e50",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Images/image1.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Welcome Section */}
      <section
        style={{
          color: "white",
          padding: "40px 30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Retinal Disease Detection
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          Diabetic retinopathy is one of the most common complications of diabetes that affects the eyes. It occurs due to damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina). If left untreated, this condition can lead to severe vision problems and even blindness. 
          <br /><br />
          Early detection and timely intervention are critical to managing diabetic retinopathy effectively. Advances in technology now allow for automated detection methods that can assist in identifying the condition at an early stage, enabling better treatment outcomes. This platform is designed to help users upload retinal images for analysis, providing insights into the presence or absence of diabetic retinopathy.
        </p>
      </section>

      {/* Navigation Section */}
      <section
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          padding: "30px 20px",
          borderRadius: "10px",
          marginBottom: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Explore More</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
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
            onClick={() => window.location.href = "/abstract"}
          >
            Go to Abstract
          </button>
          <button
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
            onClick={() => navigate("/upload")}
          >
            Go to Upload Page
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
