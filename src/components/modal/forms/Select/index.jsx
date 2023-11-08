import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className={styles.selectContainer}>
      <label className={`headline grey0 ${styles.label}`}>{label}</label>
      <select className={styles.select} {...rest} ref={ref}>
        <option className="paragraph" value="Iniciante">
          Iniciante
        </option>
        <option className="paragraph" value="Intermediário">
          Intermediário
        </option>
        <option className="paragraph" value="Avançado">
          Avançado
        </option>
      </select>
    </div>
  );
});
