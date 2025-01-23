const SignUpComponent = () => {
  
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form >
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "5px" }}>
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpComponent;
