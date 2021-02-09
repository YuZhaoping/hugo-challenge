import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DemoApp from './Demo';


const rootEl = document.getElementById('root');

const render = function() {
  ReactDOM.render(
    <DemoApp />,
    rootEl
  );
};

render();
