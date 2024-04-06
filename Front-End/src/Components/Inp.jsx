import React from "react";

function Inp({ label, type = "text", className = "", ...props }, ref) {
  return (
    <div>
      <div>
        <label htmlFor="">{label}</label>
      </div>
      <input className={`${className}`} type={type} {...props} ref={ref} />
    </div>
  );
}

export default React.forwardRef(Inp);
