import {
    adjectives,
    animals,
    colors,
    uniqueNamesGenerator,
  } from "unique-names-generator";
  import axios from "../../../utils/axios";
  
  const IDLE = "idle";
  const PENDING = "pending";
  const RESOLVED = "resolved";
  const REJECTED = "rejected";
  
  const name = () => {
    return uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: " ",
      style: "capital",
      length: 3,
    });
  };
  
  const initialState = {
    status: IDLE,
    nodes: {},
  };
  
  // Actions Creators
  // const GET_NODES = 'GET_NODES'
  
  const updateStatus = (status) => (dispatch) => {
    dispatch({
      type: "STATUS",
      payload: status,
    });
  };
  
  //Actions
  
  export const getNodes = () => (dispatch) => {
    dispatch(updateStatus(PENDING));
    axios
      .get("nodes/stats/locations")
      .then((res) => {
        const data = res.payload.map((item) => {
          return { ...item, name: name() };
        });
  
        dispatch({
          type: "SET_NODES",
          payload: data,
        });
        dispatch(updateStatus(RESOLVED));
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "SET_NODES",
          payload: err,
        });
        dispatch(updateStatus(REJECTED));
      });
  };
  
  const nodeReducer =  (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "STATUS":
        return { ...state, status: payload };
      case "SET_NODES":
        return { ...state, nodes: payload };
      case "FAILED":
        return { ...state, nodes: payload };
  
      default:
        return state;
    }
  };

  export default nodeReducer
  