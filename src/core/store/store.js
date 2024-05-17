import authReducer from '../features/auth/auth-slice';
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profile-slice';

export default configureStore({
  reducer: { authStore: authReducer, profileStore: profileReducer },
});
