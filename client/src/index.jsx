/* eslint-disable import/extensions */

import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const videoId = window.location.search.slice(1) || 1;

ReactDOM.render(
  <App videoId={videoId} />,
  document.getElementById('carousel'),
);
