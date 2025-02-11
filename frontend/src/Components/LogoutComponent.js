import React from "react";

const LogoutComponent = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include", // Required for handling session cookies
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        onLogout(); // Callback to update state in parent component
      } else {
        alert("Logout failed: " + data.error);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutComponent;
