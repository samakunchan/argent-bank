import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_LOCALSTORAGE_NAME } from '../../../core/features/auth/auth-action-types';
import ModalComponent from '../ModalComponent';
import { selectAuthToken } from '../../../core/features/auth/auth-selector';
import { updateProfileUserWithToken } from '../../../core/features/profile/profile-slice';
import { useState } from 'react';

/**
 * Composant du dashboard
 * @param user
 * @return {JSX.Element}
 * @constructor
 */
const DashboardHeaderComponent = ({ user }) => {
  const tokenInLocalStorage = localStorage.getItem(AUTH_LOCALSTORAGE_NAME);
  const tokenSelected = useSelector(selectAuthToken);

  const accessToken = tokenInLocalStorage ?? tokenSelected;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(user);
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };
  const submit = async event => {
    event.preventDefault();
    event.stopPropagation();
    await dispatch(
      updateProfileUserWithToken({
        accessToken,
        firstName: formData.firstName,
        lastName: formData.lastName,
      }),
    );
  };
  return (
    <div className='header'>
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
      <ModalComponent title='Profile'>
        <form onSubmit={submit}>
          <div className='input-wrapper'>
            <label htmlFor='firstName'>FirstName</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData[`firstName`]}
              onChange={handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='lastName'>LastName</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData[`lastName`]}
              onChange={handleChange}
            />
          </div>
          <button className={'sign-in-button'} type={'submit'}>
            Update profile
          </button>
        </form>
      </ModalComponent>
    </div>
  );
};

export default DashboardHeaderComponent;
