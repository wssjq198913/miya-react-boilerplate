import React, { Component } from 'react';
import { hot } from 'react-hot-loader'; //eslint-disable-line
import { Route, Switch, Redirect } from 'react-router-dom';
import { ComponentDemo, ComponentDemo2 } from '../../components';
import logo from '../../assets/logo.svg';
import style from './App.scss';
import { Page1, Page2, NoMatch } from '../index';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style['App-header']}>
          <img alt="logo" src={logo} className={style['App-logo']} />
          <h1 className={style['App-title']}>Welcome to React</h1>
        </header>
        <ComponentDemo name="component demo1" />
        <ComponentDemo2 testProp={123} />
        <p className={style['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>routes are listed below</h1>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Redirect from="/Page1" to="/" />
          <Route exact path="/Page2" component={Page2} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
