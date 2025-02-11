
// const LoginComponent = () => {

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2>Login</h2>
//       <form >
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
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
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//           />
//         </div>
//         <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginComponent;


// import { useState } from "react";

// const LoginComponent = () => {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await fetch("http://127.0.0.1:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Login successful!");
//       } else {
//         setMessage(data.error || "Login failed. Try again.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
//           <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
//           <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}
//             style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
//         </div>
//         <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}>
//           Login
//         </button>
//         {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginComponent;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        setTimeout(() => navigate("/home"), 1000);
      } else {
        setMessage(data.error || "Login failed. Try again.");
      }
    } catch (error) {
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}>
          Login
        </button>
        {message && <p style={{ marginTop: "10px", color: message === "Login successful!" ? "green" : "red" }}>{message}</p>}
      </form>
    </div>
  );
};

export default LoginComponent;

