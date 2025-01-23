import React from "react";

const LandingPageComponent = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        color: "#2c3e50",
        lineHeight: "1.6",
        backgroundColor: "#ecf0f1",
      }}
    >
      {/* Hero Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #3498db, #2ecc71)",
          padding: "60px 20px",
          textAlign: "center",
          color: "#ecf0f1",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
          Diabetic Retinopathy Detection
        </h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "30px" }}>
          Transforming healthcare with AI-driven technology to detect diabetic
          retinopathy early and save vision.
        </p>
        <button
          style={{
            backgroundColor: "#2980b9",
            color: "white",
            padding: "15px 30px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#ecf0f1",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px", color: "#2c3e50" }}>
          Why Choose Us
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <FeatureCard
            title="Accurate AI Diagnosis"
            description="Our advanced AI ensures over 95% accuracy in detecting diabetic retinopathy."
          />
          <FeatureCard
            title="Easy Integration"
            description="Seamlessly integrate our tool into your clinic's workflow."
          />
          <FeatureCard
            title="Fast Results"
            description="Get diagnostic results in under 5 minutes."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#bdc3c7",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          What Our Users Say
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Testimonial
            text="This platform has been a game changer for early detection of diabetic retinopathy!"
            author="Dr. Sarah Johnson"
          />
          <Testimonial
            text="Quick results and easy to use—perfect for my practice."
            author="Dr. Anil Kumar"
          />
          <Testimonial
            text="The AI-powered analysis is incredibly accurate and reliable."
            author="Priya Singh"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        style={{
          padding: "40px 20px",
          background: "linear-gradient(135deg, #3498db, #2ecc71)",
          textAlign: "center",
          color: "black",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Ready to Make a Difference?
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Join our platform to help prevent blindness caused by diabetic
          retinopathy.
        </p>
        <button
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            padding: "15px 30px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Sign Up Now
        </button>
      </section>
      <br></br>
      <br></br>
    </div>
  );
};

/* Feature Card Component */
const FeatureCard = ({ title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ color: "#2c3e50" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

/* Testimonial Component */
const Testimonial = ({ text, author }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        width: "280px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{`"${text}"`}</p>
      <p style={{ fontWeight: "bold", marginTop: "0" }}>- {author}</p>
    </div>
  );
};

export default LandingPageComponent;
