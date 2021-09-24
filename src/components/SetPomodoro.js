import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

import Button from './Button';
import Countdown from './Countdown';
import Timer from './Timer';

import TimerLengthControl from './TimerLengthControl';

const SetPomodoro = () => {
  // Session
  const [sessionLength, setSessionLength] = useState(25);

  const incrementSession = () => {
    if (!isRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimer(sessionLength * 60 + 60);
    }
  };

  const decrementSession = () => {
    if (!isRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimer(sessionLength * 60 - 60);
    }
  };

  // Break
  const [breakLength, setBreakLength] = useState(5);

  const incrementBreak = () => {
    if (!isRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreak = () => {
    if (!isRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  // Timer
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(1500);
  const [timerType, setTimerType] = useState('Session');

  // Audio
  const audioRing = useRef();

  useEffect(() => {
    // Switch
    const switchControl = () => {
      if (timerType === 'Session') {
        setTimer(breakLength * 60);
        setTimerType('Break');
      } else {
        setTimer(sessionLength * 60);
        setTimerType('Session');
      }
    };

    // Interval
    let intervalID = null;
    if (isRunning) {
      if (timer > 0) {
        intervalID = setTimeout(() => {
          setTimer((timer) => timer - 1);
        }, 1000);
      } else {
        switchControl();
        clearTimeout(intervalID);
        audioRing.current.play();

        setIsRunning(true);
      }
    } else if (!isRunning && timer !== 0) {
      clearTimeout(intervalID);
    }

    // Cleanup
    return () => clearTimeout(intervalID);
  }, [breakLength, isRunning, sessionLength, timer, timerType]);

  // Start
  const startTimer = () => {
    setIsRunning(true);
  };

  // Stop
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(1500);
    setTimerType('Session');
    setSessionLength(25);
    setBreakLength(5);
    audioRing.current.pause();
    audioRing.current.currentTime = 0;
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-8 bg-back-light rounded-pill text-gray text-center my-1 py-3">
            <h2>Pomodoro Clock</h2>
            <small>Be productive the right way.</small>
          </div>
          <div className="col-6 text-center ">
            <div className="d-block text-gray fs-5" id="session-label">
              Session Length
            </div>
            <TimerLengthControl
              increment={incrementSession}
              decrement={decrementSession}
              length={sessionLength}
              lengthId="session-length"
              addId="session-increment"
              minId="session-decrement"
            />
          </div>
          <div className="col-6 text-center">
            <div className="d-block text-gray fs-5" id="break-label">
              Break Length
            </div>
            <TimerLengthControl
              increment={incrementBreak}
              decrement={decrementBreak}
              length={breakLength}
              lengthId="break-length"
              addId="break-increment"
              minId="break-decrement"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <Countdown
          timeLeftId="time-left"
          timerLabelId="timer-label"
          timerType={timerType}
          timer={Timer(timer)}
        />
        <div
          id="timer-control"
          className="col-10 d-flex justify-content-center align-items-center"
        >
          {!isRunning ? (
            <Button
              buttonId="start_stop"
              activeClass="active-labels"
              _callback={startTimer}
              title={'Start'}
            />
          ) : (
            <Button
              buttonId="start_stop"
              activeClass="active-labels"
              _callback={stopTimer}
              title={'Stop'}
            />
          )}

          <button
            id="reset"
            className="btn-level rounded-pill"
            onClick={resetTimer}
          >
            <FiRefreshCw />
          </button>
        </div>
      </div>
      <audio
        id="beep"
        ref={audioRing}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </Fragment>
  );
};

export default SetPomodoro;
