import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const TechCard = ({ tech }) => {
  const { removeTech, setEditTech } = useContext(TechContext);

  return (
    <li className={styles.listItem}>
      <div className={styles.titleContainer}>
        <h3 className={`title three grey0 ${styles.itemTitle}`}>
          {tech.title}
        </h3>
      </div>

      <div className={styles.infoContainer}>
        <p className={`headline grey1 ${styles.paragraphContainer}`}>
          {tech.status}
        </p>
        <div className={styles.btnContainer}>
          <button
            className={styles.editBtn}
            onClick={() => setEditTech(tech)}
            title="Editar"
            aria-label="edit"
          >
            <MdOutlineModeEditOutline />
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => removeTech(tech.id)}
            title="Deletar"
            aria-label="delete"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </li>
  );
};
