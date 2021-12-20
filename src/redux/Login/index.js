//initial state
const initialState = {
  username: "",
};

//action
export const setUserName = (name) => (dispatch) => {
  dispatch({
    type: "SET_NAME",
    payload: name,
  });
};

//reducer
const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NAME":
      return { ...state, username: payload };
    default:
      return state;
  }
};
export default loginReducer;
