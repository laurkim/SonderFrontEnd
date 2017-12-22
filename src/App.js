import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './app.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Login from './components/Login';
import UserAuthorization from './components/UserAuth';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <NavigationBar />
        <Route exact path="/home" component={UserAuthorization} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    );
  }
};

export default App;
