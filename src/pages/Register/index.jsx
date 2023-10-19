import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/index.jsx";
import { RegisterForm } from "../../components/forms/RegisterForm/index.jsx";
import styles from "./style.module.scss";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.headerContainer}>
        <Header isLoginPage={false}>
          <button onClick={() => navigate("/")} className="btn disabled small">
            Voltar
          </button>
        </Header>
      </div>
      <main className="container">
        <RegisterForm />
      </main>
    </>
  );
};
