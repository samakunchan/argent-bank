import './index.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LayoutComponent from './components/layout/LayoutComponent';
import LoginPage from './pages/LoginPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-in' element={<LoginPage />} />
        </Routes>
      </LayoutComponent>
    </Router>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
