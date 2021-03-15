import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Main'
import Blog from './components/blog/Blog'
import _404 from './components/404'
import Layout from './components/others/Layout'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route component={_404} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
