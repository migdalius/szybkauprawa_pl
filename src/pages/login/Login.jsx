import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/loginForm/LoginForm";

export const Login = () => {
  return (
    <div>
      <Navigation />
      <LoginForm />
      <Footer type="banner" />
    </div>
  );
};

export default Login;
