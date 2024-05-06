import './index.scss';
import { Link } from 'react-router-dom';

const AuthenticationComponent = () => {
  return (
    <div>
      <Link to={'/sign-in'} className={'main-nav-item'}>
        <i className='fa fa-user-circle'></i>
        <span>Sign In</span>
      </Link>
    </div>
  );
};

export default AuthenticationComponent;
