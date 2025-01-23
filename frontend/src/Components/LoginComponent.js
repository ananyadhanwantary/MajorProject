
const LoginComponent = () => {

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Login</h2>
      <form >
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
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
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
