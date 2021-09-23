import React, { useContext, useState } from 'react';
import { SettingContext } from '../context/SettingsContext';

import TimerLengthControl from './TimerLengthControl';

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingContext);

  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 30,
    active: 'work',
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;

      default:
        break;
    }
    console.log(newTimer);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateExecute(newTimer);
  };

  const SetWorkLength = (e) => {
    lengthControl('work', e.currentTarget.value, newTimer.work);
  };

  const SetShortLength = (e) => {
    lengthControl('short', e.currentTarget.value, newTimer.short);
  };

  const SetLongLength = (e) => {
    lengthControl('long', e.currentTarget.value, newTimer.long);
  };

  const lengthControl = (stateToChange, sign, currentLength) => {
    if (sign === '-' && currentLength !== 1) {
      setNewTimer({ ...newTimer, [stateToChange]: currentLength - 1 });
    } else if (sign === '+' && currentLength !== 60) {
      setNewTimer({ ...newTimer, [stateToChange]: currentLength + 1 });
    }
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-8">
          <div
            className="row justify-content-center align-items-center"
            noValidate
          >
            <div className="col-10 bg-back-light rounded-pill text-gray text-center mb-4 py-4">
              <h1>Pomodoro Clock</h1>
              <small>Be productive the right way.</small>
            </div>
            <div
              id="timer-label"
              className="col-4 text-center d-flex-block align-items-center"
            >
              <TimerLengthControl
                labelId="session-label"
                label="Work Session"
                name="work"
                onChange={handleChange}
                value={newTimer.work}
                onClick={SetWorkLength}
                length={newTimer.work}
                addId="session-increment"
                minId="session-decrement"
                lengthId="session-length"
              />
            </div>
            <div className="col-4 text-center">
              <TimerLengthControl
                labelId="break-label"
                label="Short Break"
                name="short"
                onChange={handleChange}
                value={newTimer.short}
                onClick={SetShortLength}
                length={newTimer.short}
                addId="break-increment"
                minId="break-decrement"
                lengthId="break-length"
              />
            </div>
            <div className="col-4 text-center">
              <TimerLengthControl
                labelId="long-break-label"
                label="Long Break"
                name="long"
                onChange={handleChange}
                value={newTimer.long}
                onClick={SetLongLength}
                length={newTimer.long}
                addId="longbreak-increment"
                minId="longbreak-decrement"
                lengthId="longbreak-length"
              />
            </div>
            <div className="mt-4 col-8  text-center">
              <button type="button" onClick={handleSubmit}>
                Set Timer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPomodoro;
