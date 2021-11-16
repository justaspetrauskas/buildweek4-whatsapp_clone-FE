// import './App.css';
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Components/Registration/Registration"
import Homepage from './Homepage/Homepage';
function App() {
  return (
    <div >

      <HashRouter basename='/'>


        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/register' render={() => <Registration />} />
        <Route exact path='/home' render={() => <Homepage />} />

      </HashRouter>
    </div>
  )
}
export default App;
