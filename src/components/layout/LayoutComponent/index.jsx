import './index.scss';
import {
  AUTH_LOCALSTORAGE_NAME,
  AUTH_TOKEN_DEFAULT_MESSAGE,
} from '../../../core/features/auth/auth-action-types';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import { profileUserWithToken } from '../../../core/features/profile/profile-slice';
import { selectAuthToken } from '../../../core/features/auth/auth-selector';
import { useEffect } from 'react';

const LayoutComponent = ({ children }) => {
  const tokenInLocalStorage = localStorage.getItem(AUTH_LOCALSTORAGE_NAME);
  const tokenSelected = useSelector(selectAuthToken);

  const accessToken = tokenInLocalStorage ?? tokenSelected;

  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken !== AUTH_TOKEN_DEFAULT_MESSAGE) {
      dispatch(profileUserWithToken({ accessToken }));
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
