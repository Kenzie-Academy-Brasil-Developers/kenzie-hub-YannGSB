import { Header } from "../../components/Header/index.jsx";
import { LoginForm } from "../../components/forms/LoginForm/index.jsx";

export const Login = () => {
  return (
    <>
      <Header isLoginPage={true} />
      <main className="container">
        <LoginForm />
      </main>
    </>
  );
};
