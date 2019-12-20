import React from 'react'
import Counter from './counter.js'
import Filmovi from './filmovi.js'
import Home from './home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>

          <nav>
            <ul>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/filmovi">Filmovi</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/counter">
              <Counter/>
            </Route>
            <Route path="/filmovi">
              <Filmovi/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App
