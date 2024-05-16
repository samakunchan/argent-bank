import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RouteName } from '../../../core/utils/utils';
import { authenticateUser } from '../../../core/features/auth/auth-slice';
import { selectUserIsConnected } from '../../../core/features/profile/profile-selector';

// { username: 'tony@stark.com', password: 'password123' }
const initialState = { username: '', password: 'password123' };

const LoginPage = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const dispatch = useDispatch();
  const isConnected = useSelector(selectUserIsConnected);

  const handleSubmit = async event => {
    event.preventDefault();
    await dispatch(authenticateUser({ email: formData.username, password: formData.password }));
    setFormData(initialState);
    if (isConnected) {
      navigate(RouteName.dashboard);
    }
  };
  useEffect(() => {
    if (isConnected) {
      navigate(RouteName.dashboard);
    }
  }, [isConnected, navigate]);

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <Link to={''} className={'sign-in-button'} type={'submit'} onClick={handleSubmit}>
            Sign In
          </Link>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
