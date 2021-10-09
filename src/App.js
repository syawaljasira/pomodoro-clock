import './css/App.css';

import SetPomodoro from './components/SetPomodoro';

function App() {
  return (
    <div className="App bg-back">
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-10 col-sm-8 my-2">
            <div
              id="title-header"
              className="text-center bg-black rounded-pill py-2 py-sm-3 mb-3"
            >
              <h2 className="py-2">Pomodoro Clock</h2>
            </div>
            <SetPomodoro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
