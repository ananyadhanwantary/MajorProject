// import React from "react";

// const HomeComponent = () => {
//   return (
//     <div
//       style={{
//         fontFamily: "'Roboto', sans-serif",
//         color: "#333",
//         lineHeight: "1.8",
//         backgroundColor: "#f9f9f9",
//         padding: "30px",
//         minHeight: "100vh",
//       }}
//     >
//       {/* Hero Section */}
//       <section
//         style={{
//           padding: "50px",
//           backgroundColor: "#6c63ff",
//           color: "#fff",
//           textAlign: "center",
//           borderRadius: "12px",
//           marginBottom: "40px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "20px" }}>
//           Welcome to Diabetic Retinopathy Detection
//         </h2>
//         <p style={{ fontSize: "1.3rem", fontWeight: "400", marginBottom: "30px" }}>
//           Empowering healthcare through advanced AI technology. Detect diabetic
//           retinopathy early for better treatment outcomes.
//         </p>
//         <button
//           style={{
//             backgroundColor: "#ff6584",
//             color: "#fff",
//             padding: "15px 35px",
//             fontSize: "1rem",
//             fontWeight: "500",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             transition: "background-color 0.3s ease",
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#ff5071")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6584")}
//         >
//           Get Started
//         </button>
//       </section>

//       {/* Features Section */}
//       <section
//         style={{
//           padding: "40px",
//           backgroundColor: "#fff",
//           borderRadius: "12px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
//           textAlign: "center",
//         }}
//       >
//         <h3 style={{ fontSize: "2.4rem", fontWeight: "600", marginBottom: "30px" }}>
//           Why Choose Our Platform?
//         </h3>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             gap: "20px",
//             flexWrap: "wrap",
//           }}
//         >
//           {[
//             {
//               title: "AI-Powered Detection",
//               description:
//                 "Leverage cutting-edge technology to identify early signs of diabetic retinopathy with high accuracy.",
//             },
//             {
//               title: "Quick Results",
//               description:
//                 "Receive instant analysis of your retinal images to make informed healthcare decisions.",
//             },
//             {
//               title: "Secure & Private",
//               description:
//                 "Your data is safe with us. We ensure confidentiality and secure handling of your sensitive information.",
//             },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#f4f4f4",
//                 padding: "25px",
//                 borderRadius: "8px",
//                 flex: "1",
//                 textAlign: "center",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 maxWidth: "300px",
//                 margin: "auto",
//               }}
//             >
//               <h4 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>
//                 {feature.title}
//               </h4>
//               <p style={{ fontSize: "1rem", fontWeight: "400" }}>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeComponent;

import React from "react";

const HomeComponent = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        color: "#2c3e50",
        lineHeight: "1.6",
        backgroundColor: "#f7f9fb",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Welcome Section */}
      <section
        style={{
          backgroundColor: "#1abc9c",
          color: "white",
          padding: "30px 20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Welcome Back, User!
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "0" }}>
          Here's a quick overview of your activities and updates.
        </p>
      </section>

      {/* Quick Links Section */}
      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Quick Links</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <QuickLink title="View Profile" onClick={() => alert("Go to Profile")} />
          <QuickLink title="Settings" onClick={() => alert("Go to Settings")} />
          <QuickLink title="Notifications" onClick={() => alert("View Notifications")} />
          <QuickLink title="Support" onClick={() => alert("Contact Support")} />
        </div>
      </section>

      {/* Recent Activity Section */}
      <section>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Recent Activity</h3>
        <div>
          <Activity
            title="Logged in successfully"
            timestamp="2025-01-16 10:30 AM"
          />
          <Activity
            title="Updated profile picture"
            timestamp="2025-01-15 5:20 PM"
          />
          <Activity
            title="Joined the 'AI Enthusiasts' group"
            timestamp="2025-01-14 3:15 PM"
          />
        </div>
      </section>
    </div>
  );
};

/* Quick Link Component */
const QuickLink = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#3498db",
        color: "white",
        padding: "15px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {title}
    </button>
  );
};

/* Activity Component */
const Activity = ({ title, timestamp }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "15px 20px",
        borderRadius: "8px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p style={{ margin: 0 }}>{title}</p>
      <span style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>{timestamp}</span>
    </div>
  );
};

export default HomeComponent;

