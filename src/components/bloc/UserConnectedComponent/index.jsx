import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { RouteName, Theme } from '../../../core/utils/utils';
import { disconnectUser, removeTokenToLocalStorage } from '../../../core/features/auth/auth-slice';
import { initiateBackUser } from '../../../core/features/profile/profile-slice';
import { useDispatch } from 'react-redux';

const UserConnectedComponent = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = async () => {
    await dispatch(disconnectUser({ user }));
    await dispatch(initiateBackUser());
    await dispatch(removeTokenToLocalStorage());
    navigate(RouteName.signIn);
  };

  const changeThemeColor = () => {
    Theme.changeThemeColor(Theme.secondary);
  };

  return (
    <div>
      <Link to={RouteName.dashboard} className={'main-nav-item'} onClick={changeThemeColor}>
        <i className='fa fa-user-circle'></i>
        <span>{user.firstName}</span>
      </Link>

      <span className={'main-nav-item btn'} onClick={signOut}>
        <i className='fa fa-sign-out'></i>
        <span>Sign Out</span>
      </span>
    </div>
  );
};

export default UserConnectedComponent;
