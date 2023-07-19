import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Login from './components/Login';
import SignUp from './components/SignUp';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Route path = "/" component = {< App/>}>
       <Route path = "login" component = {<Login />} />
       <Route path = "signup" component = {<SignUp />} />
    </Route>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
