import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#34495e",
          color: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "28px", fontWeight: "bold" }}>
          My App
        </h1>
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="#login"
                style={{
                  textDecoration: "none",
                  color: "#1abc9c",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#signup"
                style={{
                  textDecoration: "none",
                  color: "#e74c3c",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => {
                  handleSignup(e);
                }}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
