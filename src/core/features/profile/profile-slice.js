import {
  ERROR_MESSAGE,
  PROFILE_IS_IDLE,
  PROFILE_IS_LOADING,
  PROFILE_IS_REJECT,
  PROFILE_IS_SUCCEEDED,
  PROFILE_LOAD_INFOS,
  PROFILE_SLICE_NAME,
} from './profile-action-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfileService } from './profile-service';

const profileService = new ProfileService();

export const profileUserWithToken = createAsyncThunk(
  PROFILE_LOAD_INFOS,
  async ({ accessToken }) => {
    return profileService.getUserProfile({ accessToken });
  },
);

export const updateProfileUserWithToken = createAsyncThunk(
  PROFILE_LOAD_INFOS,
  async ({ accessToken, firstName, lastName }) => {
    return profileService.updateProfile({ accessToken, firstName, lastName });
  },
);

const initialState = {
  isConnected: false,
  profileUser: null,
  showProfileUserForm: false,
  status: PROFILE_IS_IDLE,
  error: ERROR_MESSAGE,
};

const reducers = {
  initiateBackUser: state => {
    state.isConnected = false;
    state.showProfileUserForm = false;
    state.profileUser = {};
    state.status = PROFILE_IS_IDLE;
    state.error = ERROR_MESSAGE;
  },
  toogleUserForm: (state, action) => {
    state.showProfileUserForm = action.payload;
  },
};

export const { actions, reducer } = createSlice({
  name: PROFILE_SLICE_NAME,
  initialState,
  reducers,
  extraReducers(builder) {
    builder
      .addCase(profileUserWithToken.pending, state => {
        state.isConnected = false;
        state.showProfileUserForm = false;
        state.profileUser = {};
        state.status = PROFILE_IS_LOADING;
        state.error = ERROR_MESSAGE;
      })
      .addCase(profileUserWithToken.fulfilled, (state, action) => {
        state.isConnected = true;
        state.showProfileUserForm = false;
        state.profileUser = action.payload;
        state.status = PROFILE_IS_SUCCEEDED;
        state.error = ERROR_MESSAGE;
      })
      .addCase(profileUserWithToken.rejected, (state, action) => {
        state.isConnected = false;
        state.showProfileUserForm = false;
        state.profileUser = {};
        state.status = PROFILE_IS_REJECT;
        state.error = action[`error`].message;
      });
  },
});

export const { initiateBackUser, toogleUserForm } = actions;

export default reducer;
