import './index.scss';
import { Link } from 'react-router-dom';

const UserConnectedComponent = ({ user }) => {
  return (
    <div>
      <Link to={'/dashboard/user'} className={'main-nav-item'}>
        <i className='fa fa-user-circle'></i>
        <span>{user[`firstname`]}</span>
      </Link>
      <Link to={'/sign-in'} className={'main-nav-item'}>
        <i className='fa fa-sign-out'></i>
        <span>Sign Out</span>
      </Link>
    </div>
  );
};

export default UserConnectedComponent;
