import React, { createContext, useState } from 'react';

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  const startTimer = () => {
    setStartAnimate(true);
  };

  const pauseTimer = () => {
    setStartAnimate(false);
  };

  const stopTimer = () => {
    setStartAnimate(false);
  };

  const SettingBtn = () => {
    setPomodoro(0);
    setExecuting({});
  };

  const SetCurrentTimer = (activeState) => {
    setExecuting({
      ...executing,
      active: activeState,
    });
    SetTimerTime(executing);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    SetTimerTime(updatedSettings);
  };

  const SetTimerTime = (ev) => {
    switch (ev.active) {
      case 'work':
        setPomodoro(ev.work);
        break;
      case 'short':
        setPomodoro(ev.short);
        break;

      case 'long':
        setPomodoro(ev.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <SettingContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        stopTimer,
        SettingBtn,
        SetCurrentTimer,
        updateExecute,
        children,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
