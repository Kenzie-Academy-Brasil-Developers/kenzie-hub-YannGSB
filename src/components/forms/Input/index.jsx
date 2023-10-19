import React, { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label className="label grey0" htmlFor={id}>
        {label}
      </label>
      <input className="input" ref={ref} {...rest} />
      {error ? <p className="helperText">{error.message}</p> : null}
    </div>
  );
});
