import {createSlice} from '@reduxjs/toolkit';

export interface IAuthState {
  isLogin: boolean;
}

const initialState: IAuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogin: (
      state,
      action: {
        payload: IAuthState;
      },
    ) => {
      state.isLogin = action.payload.isLogin;
    },
    handleLogout: state => {
      state.isLogin = false;
    },
  },
});

export const {handleLogin, handleLogout} = authSlice.actions;
export default authSlice.reducer;
