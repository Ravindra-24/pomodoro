const initialState = {
  uid: null,
  userName: null,
  initials: null,
  email: null,
  photo: null,
  loaded: false,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "AUTH":
      return { ...state, ...payload, loaded: true };
    case "LOGOUT":
      return { initialState, loaded: true };
    default:
      return state;
  }
};

export default authReducer;
