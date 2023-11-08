import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div>
      <label className="headline grey0">{label}</label>
      <input {...rest} ref={ref} className="paragraph" />
    </div>
  );
});
