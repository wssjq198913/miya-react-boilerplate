import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App/App';

const AppToRender = () => (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(<AppToRender />, document.getElementById('root'));
