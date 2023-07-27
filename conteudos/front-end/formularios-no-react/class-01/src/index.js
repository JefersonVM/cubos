import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Main from '../src/pages/Main';
import SingleInputs from './pages/SingleInputs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    <SingleInputs/>
  </React.StrictMode>
);


