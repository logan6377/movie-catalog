import React from "react";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <div className="form-group" key={name}>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
};

export default Input;
