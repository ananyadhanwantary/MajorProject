import React from "react";

const FooterComponent = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        textAlign: "center",
        padding: "15px 0",
        bottom: "0",
        width: "100%",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        © {new Date().getFullYear()} My App. All rights reserved.
      </p>
      <div style={{ marginTop: "10px" }}>
        <a
          href="#privacy"
          style={{
            color: "#1abc9c",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          style={{
            color: "#3498db",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Terms of Service
        </a>
        <a
          href="#contact"
          style={{
            color: "#e74c3c",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
