import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ timer, timerType, timerLabelId, timeLeftId }) => {
  return (
    <Fragment>
      <div
        id={timerLabelId}
        className="col-4 mb-3 text-gray py-2 rounded-pill bg-black fs-4 d-flex justify-content-center"
      >
        <div className="bg-back-light rounded-pill px-5">
          {timerType === 'Break' ? 'Break' : 'Session'}
        </div>
      </div>
      <div
        id={timeLeftId}
        className="col-10 d-flex align-items-center justify-content-center"
      >
        <div className="time-wrapper rounded-pill d-flex align-items-center justify-content-center ">
          {timer}
        </div>
      </div>
    </Fragment>
  );
};

Countdown.propTypes = {
  timer: PropTypes.number.isRequired,
  timerType: PropTypes.string.isRequired,
};

export default Countdown;
