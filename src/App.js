import Login from './Components/Login/Login'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Components/Registration/Registration"
import Homepage from './Homepage/Homepage';
import './App.css'
function App() {
  return (
    <div >

      <Router basename='/'>


        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/register' render={() => <Registration />} />

        <Route exact path='/home' render={() => <Homepage />} />

      </Router>
    </div>
  )
}
export default App


