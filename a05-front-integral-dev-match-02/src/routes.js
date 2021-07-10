import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/main'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'

export default function Routes() {
  
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={SignIn}/>
        <Route path="/register" exact component={SignUp}/>
      </Switch>
    </Router>
  )
}