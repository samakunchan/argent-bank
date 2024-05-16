import './index.scss';
import {
  selectInfosUser,
  selectUserIsConnected,
} from '../../../core/features/profile/profile-selector';
import AuthenticationComponent from '../../bloc/AuthenticationComponent';
import { Link } from 'react-router-dom';
import { RouteName } from '../../../core/utils/utils';
import UserConnectedComponent from '../../bloc/UserConnectedComponent';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (window.location.pathname === '/') {
      metaThemeColor.content = '#085835';
    } else if (window.location.pathname !== '/') {
      metaThemeColor.content = '#12002b';
    }
  }, []);

  const profileUser = useSelector(selectInfosUser);
  const isConnected = useSelector(selectUserIsConnected);

  return (
    <nav className='main-nav'>
      <Link to={RouteName.home} className={'main-nav-logo'}>
        <img
          className='main-nav-logo-image'
          src={`${RouteName.basePath}/assets/images/argentBankLogo.png`}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {isConnected ? (
        <UserConnectedComponent user={{ id: profileUser.id, firstName: profileUser.firstName }} />
      ) : (
        <AuthenticationComponent />
      )}
    </nav>
  );
};

export default HeaderComponent;
