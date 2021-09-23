import React from 'react';

const Button = ({ title, activeClass, _callback, buttonId }) => {
  return (
    <div>
      <button id={buttonId} className={activeClass} onClick={_callback}>
        {title}
      </button>
    </div>
  );
};

export default Button;
