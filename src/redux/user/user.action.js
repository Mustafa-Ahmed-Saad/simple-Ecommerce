import userType from './user.type';

export const saveLoginInfo = (loginInfo) => ({
  type: userType.SAVE_LOGIN_INFO,
  payload: loginInfo,
});

export const logout = () => ({
  type: userType.LOGOUT,
});

export const updateUserInfo = (newInfo) => ({
  type: userType.UPDATE_USER_INFO,
  payload: newInfo,
});
