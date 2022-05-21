import React from "react";

const Button = (props) => {
  const { buttonType, buttonClass, buttonText, textLength } = props;
  const messageLength = 256;
  return (
    <button
      type={buttonType}
      className={buttonClass}
      disabled={textLength < 1 || textLength > messageLength}
    >
      {textLength > messageLength ? "message too long" : buttonText}
    </button>
  );
};

export default Button;
