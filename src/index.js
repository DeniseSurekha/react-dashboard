import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.less'
import 'mdbootstrap/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
//import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();