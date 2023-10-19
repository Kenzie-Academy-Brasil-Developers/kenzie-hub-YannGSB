import { Header } from "../../components/Header/index.jsx";
import { LoginForm } from "../../components/forms/LoginForm/index.jsx";

export const Login = ({ setUser }) => {
  return (
    <>
      <Header isLoginPage={true} />
      <main className="container">
        <LoginForm setUser={setUser} />
      </main>
    </>
  );
};
