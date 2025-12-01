import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shopping from './Shopping.jsx'
import FruitList from "./FruitList.jsx"
import Abella from "./Abella.jsx"
import CQS from './CQS.jsx'
import CalculatorJSX from './CalculatorJSX.jsx';
import RosalinaSalaAbellaQuizTaker from './RosalinaSalaAbellaQuizTaker.jsx'
import Scidamath from './Scidamath.jsx'
import AbellaApp from './AbellaApp.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AbellaApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
