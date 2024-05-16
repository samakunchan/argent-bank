import './index.scss';
import { RouteName, Theme } from '../../../core/utils/utils';
import {
  selectInfosUser,
  selectUserIsConnected,
} from '../../../core/features/profile/profile-selector';
import AuthenticationComponent from '../../bloc/AuthenticationComponent';
import { Link } from 'react-router-dom';
import UserConnectedComponent from '../../bloc/UserConnectedComponent';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
  useEffect(() => {
    if (window.location.pathname === '/') {
      Theme.changeThemeColor(Theme.primary);
    } else if (window.location.pathname !== '/') {
      Theme.changeThemeColor(Theme.secondary);
    }
  }, []);

  const profileUser = useSelector(selectInfosUser);
  const isConnected = useSelector(selectUserIsConnected);

  const changeThemeColor = () => {
    Theme.changeThemeColor(Theme.primary);
  };

  return (
    <nav className='main-nav'>
      <Link to={RouteName.home} className={'main-nav-logo'} onClick={changeThemeColor}>
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
