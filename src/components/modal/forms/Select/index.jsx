import { forwardRef } from "react";

export const Select = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div>
      <label className="headline grey0">{label}</label>
      <select {...rest} ref={ref}>
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
