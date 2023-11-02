import { useContext } from "react";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <Header isLoginPage={false}>
        <button onClick={userLogout} className="btn disabled small">
          Sair
        </button>
      </Header>
      <hr className="line" />
      <div className="containerFlex">
        <section className={styles.userInfo}>
          <h1 className="title one grey0">Olá, {user?.name}</h1>
          <p className="headline grey1">{user?.course_module}</p>
        </section>
      </div>
      <hr className="line" />
      <div className="containerFlex">
        <main className={styles.mainContainer}>
          <h1 className="title one grey0">
            Que pena! Estamos em desenvolvimento 😞
          </h1>
          <p className="paragraph white">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </main>
      </div>
    </>
  );
};
