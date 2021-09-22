import React, { useContext, useState } from 'react';
import { SettingContext } from '../context/SettingsContext';

import Button from './Button';

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingContext);

  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
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

  return (
    <div className="container">
      <div className="row vh-100 border border-dark justify-content-center align-items-center">
        <div className="col-8">
          <form
            className="row border border-dark justify-content-center align-items-center"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-10 bg-back-light rounded-pill text-gray text-center mb-4 py-4">
              <h1>Pomodoro Clock</h1>
              <small>Be productive the right way.</small>
            </div>
            <div className="col-3 text-center">
              <label for="work" className="text-gray pb-3">
                Work Length
              </label>
              <input
                className="rounded-pill ps-3 input text-center"
                type="number"
                name="work"
                onChange={handleChange}
                value={newTimer.work}
              />
            </div>
            <div className="col-3 text-center">
              <label for="work" className="text-gray pb-3">
                Short Break
              </label>
              <input
                className="rounded-pill ps-3 input text-center"
                type="number"
                name="shortBreak"
                onChange={handleChange}
                value={newTimer.short}
              />
            </div>
            <div className="col-3 text-center">
              <label for="work" className="text-gray pb-2">
                Long Break
              </label>
              <input
                className="rounded-pill ps-3 input text-center"
                type="number"
                name="longBreak"
                onChange={handleChange}
                value={newTimer.long}
              />
            </div>
            <div className="mt-4 col-8 border border-dark text-center">
              <button type="submit">Set Timer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetPomodoro;
