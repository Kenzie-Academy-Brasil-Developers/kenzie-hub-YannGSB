import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`headline grey0 ${styles.label}`}>{label}</label>
      <input
        {...rest}
        ref={ref}
        className={`paragraph grey0 ${styles.input}`}
      />
    </div>
  );
});
