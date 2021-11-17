import userType from './user.type';

const initState = {
  // name: 'mustafa',
  loginInfo: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userType.SAVE_LOGIN_INFO:
      return { ...state, loginInfo: action.payload };

    case userType.LOGOUT:
      return { ...state, loginInfo: {} };

    case userType.UPDATE_USER_INFO:
      return { ...state, loginInfo: { ...state.loginInfo, ...action.payload } };

    default:
      return state;
  }
};

export default userReducer;
