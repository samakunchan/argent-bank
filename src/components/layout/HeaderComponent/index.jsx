import './index.scss';
import AuthenticationComponent from '../../bloc/AuthenticationComponent';
import { Link } from 'react-router-dom';
import UserConnectedComponent from '../../bloc/UserConnectedComponent';
import { useEffect } from 'react';

const HeaderComponent = () => {
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (window.location.pathname === '/') {
      metaThemeColor.content = '#085835';
    } else if (window.location.pathname !== '/') {
      metaThemeColor.content = '#12002b';
    }
  }, []);
  const isProdGithubPages = process.env.REACT_APP_ENV === 'gh-pages' ? `/argent-bank` : ``;
  const basePath = isProdGithubPages ? `/argent-bank` : ``;
  const isConnected = true;

  return (
    <nav className='main-nav'>
      <Link to={'/'} className={'main-nav-logo'}>
        <img
          className='main-nav-logo-image'
          src={`${basePath}/assets/images/argentBankLogo.png`}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {isConnected ? (
        <UserConnectedComponent user={{ firstname: `Tony` }} />
      ) : (
        <AuthenticationComponent />
      )}
    </nav>
  );
};

export default HeaderComponent;
