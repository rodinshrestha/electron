//initial state
const initialState = {
  node: "",
};

//Action
export const getSelectedNode = (node) => (dispatch) => {
  dispatch({
    type: "SET_NODE",
    payload: node,
  });
};

//reducer
const selectedNodeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NODE":
      return { ...state, node: payload };
    default:
      return state;
  }
};
export default selectedNodeReducer;
