import { Fragment, useContext } from 'react';
import './App.css';

import { SettingContext } from './context/SettingsContext';
import SetPomodoro from './components/SetPomodoro';
import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation';

function App() {
  const {
    pomodoro,
    executing,
    SetCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
  } = useContext(SettingContext);

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <Fragment>
          <ul>
            <li>
              <Button
                title="Work"
                activeClass={
                  executing.active === 'work' ? 'active-labels' : undefined
                }
                _callback={() => SetCurrentTimer('work')}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={
                  executing.active === 'short' ? 'active-labels' : undefined
                }
                _callback={() => SetCurrentTimer('short')}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={
                  executing.active === 'long' ? 'active-labels' : undefined
                }
                _callback={() => SetCurrentTimer('long')}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingBtn} />
          <div>
            <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}
            >
              {children}
            </CountdownAnimation>
          </div>
          <div>
            <Button
              title="Start"
              activeClass={!startAnimate ? 'active' : undefined}
              _callback={startTimer}
            />
            <Button
              title="Start"
              activeClass={startAnimate ? 'active' : undefined}
              _callback={pauseTimer}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
