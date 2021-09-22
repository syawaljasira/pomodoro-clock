import { Fragment, useContext, useEffect } from 'react';
import './sass/App.scss';

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
    updateExecute,
  } = useContext(SettingContext);

  useEffect(() => {
    updateExecute(executing);
  }, [updateExecute, executing, startAnimate]);

  return (
    <div className="App bg-back">
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <Fragment>
          <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
              <div className="col-8">
                <div className="row justify-content-center align-items-center">
                  <div className="col-10 bg-back-light rounded-pill text-gray text-center mb-4 py-4">
                    <h1>Pomodoro Clock</h1>
                    <small>Be productive the right way.</small>
                  </div>
                  <div className="col-7 mb-1 d-flex justify-content-between bg-back-light rounded-pill">
                    <Button
                      title="Work"
                      activeClass={
                        executing.active === 'work'
                          ? 'active-labels'
                          : undefined
                      }
                      _callback={() => SetCurrentTimer('work')}
                    />
                    <Button
                      title="Short Break"
                      activeClass={
                        executing.active === 'short'
                          ? 'active-labels'
                          : undefined
                      }
                      _callback={() => SetCurrentTimer('short')}
                    />
                    <Button
                      title="Long Break"
                      activeClass={
                        executing.active === 'long'
                          ? 'active-labels'
                          : undefined
                      }
                      _callback={() => SetCurrentTimer('long')}
                    />
                  </div>
                  <div className="col-10 mb-1 d-flex justify-content-center">
                    <Button title="Settings" _callback={SettingBtn} />
                  </div>
                  <div className="col-10 d-flex justify-content-center">
                    <div className="time-wrapper rounded-pill d-flex align-items-center justify-content-center">
                      <CountdownAnimation
                        key={pomodoro}
                        timer={pomodoro}
                        animate={startAnimate}
                      >
                        {children}
                      </CountdownAnimation>
                    </div>
                  </div>
                  <div className="col-10 d-flex justify-content-center align-items-center">
                    <Button
                      title="Start"
                      activeClass={!startAnimate ? 'active' : undefined}
                      _callback={startTimer}
                    />
                    <Button
                      title="Pause"
                      activeClass={startAnimate ? 'active' : undefined}
                      _callback={pauseTimer}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
