import './index.scss';
import { Link } from 'react-router-dom';
import { RouteName } from '../../../core/utils/utils';

const AuthenticationComponent = () => {
  return (
    <div>
      <Link to={RouteName.signIn} className={'main-nav-item'}>
        <i className='fa fa-user-circle'></i>
        <span>Sign In</span>
      </Link>
    </div>
  );
};

export default AuthenticationComponent;
