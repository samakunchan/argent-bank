import './index.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <nav className='main-nav'>
        <Link to={'/'} className={'main-nav-logo'}>
          <img
            className='main-nav-logo-image'
            src='/argent-bank/assets/images/argentBankLogo.png'
            alt='Argent Bank Logo'
          />
          <h1 className='sr-only'>Argent Bank</h1>
        </Link>
        <div>
          <Link to={'/sign-in'} className={'main-nav-item'}>
            <i className='fa fa-user-circle'></i> Sign In
          </Link>
        </div>
      </nav>
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <Link to={'/'} className={'sign-in-button'}>
              Sign In
            </Link>
          </form>
        </section>
      </main>
      <footer className='footer'>
        <p className='footer-text'>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default LoginPage;
