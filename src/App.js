import './App.css';
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <HashRouter basename='/'>
        <div className="App">
          {/* <Route exact path="/main" render={(routerProps) => <Main />} /> */}
          <Route exact path='/' render={(routerProps) => <Login />} />
          {/* <Route exact path='/register' render={(routerProps) => <Registration />} /> */}
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
