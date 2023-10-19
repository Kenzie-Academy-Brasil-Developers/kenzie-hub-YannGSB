import kenzieHubLogo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = ({ children, isLoginPage, isFlex }) => {
  const headerClass = isLoginPage ? styles.header : styles.headerAlt;

  return (
    <div className="containerFlex">
      <header className={headerClass}>
        <img src={kenzieHubLogo} alt="Kenzie hub logo" />
        {children}
      </header>
    </div>
  );
};
