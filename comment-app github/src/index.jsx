import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header.jsx';
import Base from'./App/App.jsx';


const rootOne = ReactDOM.createRoot(document.getElementById('header'));
const rootTwo = ReactDOM.createRoot(document.getElementById('base'));

rootOne.render(
  <Header/>
);
rootTwo.render(
  <Base/>
);