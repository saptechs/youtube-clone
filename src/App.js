import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Explore from './Screens/Explore';
import Subscription from './Screens/Subscription';
import Details from './Screens/Details';
import Videos from './Screens/Details/Components/Tabs/Videos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact>
          <Home />
        </Route>
        <Route path = '/Explore'>
          <Explore />
        </Route>
        <Route path = '/Subscription'>
          <Subscription />
        </Route>
        <Route path = '/Details'>
          <Details/>
        </Route>
        <Route path = '/Videos'>
          <Videos />
        </Route>
      </Switch>
    </Router>
    // <Home/>
  );
}

export default App;
