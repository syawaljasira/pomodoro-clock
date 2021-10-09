import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ timer, timerType, timerLabelId, timeLeftId }) => {
  return (
    <Fragment>
      <div
        id={timerLabelId}
        className="col-4 mb-3 py-2 d-flex justify-content-center"
      >
        <div className="bg-back-light text-gray rounded-pill shadow-lg px-4 pt-2 pb-1 mb-sm-1">
          <h5>{timerType === 'Break' ? 'Break' : 'Session'}</h5>
        </div>
      </div>
      <div
        id={timeLeftId}
        className="col-10 d-flex align-items-center justify-content-center mb-sm-1"
      >
        <div className="time-wrapper rounded-circle d-flex align-items-center justify-content-center">
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
