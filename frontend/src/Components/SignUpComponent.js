// const SignUpComponent = () => {
  
//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "50px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       <h2 style={{ textAlign: "center" }}>Sign Up</h2>
//       <form >
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             style={{
//               width: "100%",
//               padding: "8px",
//               boxSizing: "border-box",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             style={{
//               width: "100%",
//               padding: "8px",
//               boxSizing: "border-box",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             style={{
//               width: "100%",
//               padding: "8px",
//               boxSizing: "border-box",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "5px" }}>
//             Phone Number
//           </label>
//           <input
//             id="phoneNumber"
//             name="phoneNumber"
//             style={{
//               width: "100%",
//               padding: "8px",
//               boxSizing: "border-box",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#007BFF",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             fontWeight: "bold",
//           }}
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpComponent;

// import { useState } from "react";

// const SignUpComponent = () => {
//   const [formData, setFormData] = useState({ username: "", email: "", password: "", phoneNumber: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await fetch("http://127.0.0.1:5000/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Signup successful! You can now log in.");
//       } else {
//         setMessage(data.error || "Signup failed. Try again.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
//       <h2 style={{ textAlign: "center" }}>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
//           <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "5px" }} required />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "5px" }} required />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
//           <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "5px" }} required />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "5px" }}>Phone Number</label>
//           <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "5px" }} />
//         </div>
//         <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold" }}>
//           Sign Up
//         </button>
//         {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default SignUpComponent;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Signup successful!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setMessage(data.error || "Signup failed. Try again.");
      }
    } catch (error) {
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#28A745", color: "white", border: "none", borderRadius: "5px" }}>
          Sign Up
        </button>
        {message && <p style={{ marginTop: "10px", color: message === "Signup successful!" ? "green" : "red" }}>{message}</p>}
      </form>
    </div>
  );
};

export default SignUpComponent;
