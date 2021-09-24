import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, activeClass, _callback, buttonId }) => {
  return (
    <button id={buttonId} className={activeClass} onClick={_callback}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  _callback: PropTypes.func.isRequired,
};

export default Button;
