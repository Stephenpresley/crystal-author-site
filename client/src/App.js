import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AxiosContext } from './providers/AxiosProvider';
import { makeStyles, Button } from '@material-ui/core';
import './App.css'

//Components/Pages
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute'
import Nav from './components/Nav';
import OneArticle from './pages/OneArticle'
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
import About from './pages/About';
import Articles from './pages/Articles';
import Topic from './pages/Topic';
import NewTopic from './pages/NewTopic';
import NewArticle from './pages/NewArticle';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 14,
  },
}));

export default function App(props) {
  const classes = useStyles();
  const { token, logout } = useContext(AxiosContext);
  return (
    <div className='App'>
      {
        localStorage.getItem('token') !== null ?
          <Button className={classes.button}
            variant='contained'
            onClick={logout}>Logout
          </Button>
          :
          <Button className={classes.button}
            variant='contained'
            disabled>Logged Out
          </Button>
      }
      <Nav token={token} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Articles' component={Articles} />
        <Route path='/Bookshelf' component={Bookshelf} />
        <Route path='/About' component={About} />
        <Route path='/Login' component={Login} />
        <Route exact path='/Articles/:_id' component={Topic} />
        <Route path='/Articles/oneArticle/:_id' component={OneArticle} />
        <ProtectedRoute path='/newtopic' component={NewTopic} />
        <ProtectedRoute path='/newarticle' component={NewArticle} />
        {/* Keep this at bottom of Switch, Provides 404 */}
        <Route render={
          () => <h1>404 Not Found</h1>
        } />
      </Switch>
    </div>
  );
}