import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

function Login() {
  const { handleLogin } = useContext(SiteContext);
  return (
    <>
      <h1>Login</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Giris Yap
      </button>
    </>
  );
}

export default Login;
