import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/homePage/Home'
import Running_Workshops from './components/Page1'
import Fitness_For_Organizations from './components/Page2'
import Beginners_Running_Groups from './components/Page3'
import Blog from './components/blogPage/Blog'
import _404 from './components/others/404'
import Layout from './components/others/Layout'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Running_Workshops} />
            <Route path="/page2" component={Fitness_For_Organizations} />
            <Route path="/page3" component={Beginners_Running_Groups} />
            <Route path="/blog" component={Blog} />
            <Route component={_404} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
