import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import './App.css';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Home from './Components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    // const { i18n } = this.props;
    // i18n.changeLanguage('en');
    this.state = {
      isLoggedIn: false,
      data: {}
    }
  }
  redirect = (page, history) => {
    history.push(page);
  }

  validateUser = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  }
  getuserData = (data, props) => {
    this.setState({ data });
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route path='/logout' component={()=><Logout validateUser={this.validateUser}/>}></Route>
            <Route path='/'  exact component={()=><Login validateUser={this.validateUser} redirect={this.redirect}/>}></Route>
            <Route path='/home' exact component={Home}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }

}

  export default App;
