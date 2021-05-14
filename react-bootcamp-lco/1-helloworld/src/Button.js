import React from "react";

const Button = ({ title="Hello React!" }) => (
  <div>
    <button className="button"> {title} </button>;
  </div>
);
export default Button;
