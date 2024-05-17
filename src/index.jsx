import './index.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardPage from './pages/private-pages/DashboardPage';
import ErrorPage from './pages/public-pages/ErrorPage';
import HomePage from './pages/public-pages/HomePage';
import LayoutComponent from './components/layout/LayoutComponent';
import LoginPage from './pages/public-pages/LoginPage';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteName } from './core/utils/utils';
import reportWebVitals from './reportWebVitals';
import store from './core/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <Router basename={RouteName.prefix}>
        <LayoutComponent>
          <Routes>
            <Route path={RouteName.home} element={<HomePage />} />
            <Route path={RouteName.signIn} element={<LoginPage />} />
            <Route path={RouteName.dashboard} element={<DashboardPage />} />
            <Route path={RouteName.error} element={<ErrorPage />} />
          </Routes>
        </LayoutComponent>
      </Router>
    </Provider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
