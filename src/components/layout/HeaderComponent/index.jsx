import './index.scss';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
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
  );
};

export default HeaderComponent;
