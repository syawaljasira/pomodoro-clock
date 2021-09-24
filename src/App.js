import './css/App.css';

import SetPomodoro from './components/SetPomodoro';

function App() {
  return (
    <div className="App bg-back">
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-8">
            <SetPomodoro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
