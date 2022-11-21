import { useContext, useState } from "react";
import "./loginForm.css";
import "../../main.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const LoginForm = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navitage("/admin/panel-glowny");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="app__loginForm-main-container">
      <div className="app__loginForm-container">
        <div className="app__loginForm-left-container">
          <div className="app__loginForm-title-container">
            <h2 className="app_loginForm-title">
              Zaloguj się do panelu sprzedawcy
            </h2>
          </div>

          <form className="app__loginForm-form" onSubmit={handleLogin}>
            <div className="app_loginForm-user-name">
              <label className="mb-10">Email</label>
              <input
                className="app__loginForm-input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="app__loginForm-password">
              <label className="mb-10">Hasło</label>
              <input
                className="app__loginForm-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="app__loginFrom-button">
              Zaloguj się
            </button>
          </form>
          {error && (
            <span className="app__loginForm-error">
              Niestety login lub hasło nie są poprawne
            </span>
          )}
        </div>
        <div className="app__loginForm-right-container">
          <img
            src="../img/login_bg.png"
            alt=""
            className="app__loginForm-img"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
