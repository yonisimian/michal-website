import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { _404 } from './404'
import { Layout } from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={_404} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
