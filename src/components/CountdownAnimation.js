import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../context/SettingsContext';

const CountdownAnimation = ({ keys, timer, animate, children }) => {
  const { stopTimer } = useContext(SettingContext);

  return (
    <CountdownCircleTimer
      key={keys}
      isPlaying={animate}
      duration={timer * 60}
      colors={[['#3D56B2', 0.33]]}
      strokeWidth={6}
      size={200}
      trailColor={'#151932'}
      onComplete={() => {
        stopTimer();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
