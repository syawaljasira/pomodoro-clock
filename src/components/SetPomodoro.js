import React, { useContext, useState } from 'react';
import { SettingContext } from '../context/SettingsContext';

import Button from './Button';

const SetPomodoro = () => {
  const updatedExecute = useContext(SettingContext);

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
    updatedExecute();
  };

  return (
    <div>
      <form>
        <div>
          <input name="work" onChange={handleChange} value={newTimer.work} />
          <input
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <Button title="Set Timer" start={handleSubmit} />
      </form>
    </div>
  );
};

export default SetPomodoro;
