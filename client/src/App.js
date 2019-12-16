import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components/Pages
import Nav from './components/Nav'
import Home from './pages/Home'
import Bookshelf from './pages/Bookshelf'
import About from './pages/About'
import Articles from './pages/Articles'
import Login from './auth/Login'
import Topic from './pages/Topic'

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Articles' component={Articles}/>
        <Route path='/Bookshelf' component={Bookshelf}/>
        <Route path='/About' component={About}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Articles/:_id' component={Topic}/>
        {/* Keep this at bottom of Switch, Provides 404 */}
        <Route render={
          () => <h1>404 Not Found</h1>
        }/>
      </Switch>
    </div>
  );
}

export default App;
