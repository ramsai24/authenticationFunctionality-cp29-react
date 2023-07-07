import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </>
)

export default App
