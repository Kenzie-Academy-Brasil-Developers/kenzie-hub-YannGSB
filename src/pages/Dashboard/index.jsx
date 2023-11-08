import { useContext } from "react";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";

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
          <TechList />
        </main>
      </div>
    </>
  );
};
