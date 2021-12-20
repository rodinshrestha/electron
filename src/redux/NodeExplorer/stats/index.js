import axios from "../../../utils/axios";
const IDLE = "idle";
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

const initialState = {
  status: IDLE,
  stats: {},
};

const updateStatus = (status) => (dispatch) => {
  dispatch({
    type: "STATS_STATUS",
    payload: status,
  });
};

export const getStats = () => (dispatch) => {
  dispatch(updateStatus(PENDING));
  axios
    .get("/nodes/stats")
    .then((res) => {
      dispatch({
        type: "GET_STATS",
        payload: res.payload,
      });

      dispatch(updateStatus(RESOLVED));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "GET_STATUS_FAILED",
        payload: err,
      });
      dispatch(updateStatus(REJECTED));
    });
};

const statsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "STATS_STATUS":
      return { ...state, status: payload };
    case "GET_STATS":
      return { ...state, stats: payload };
    case "GET_STATS_FAILED":
      return { ...state, stats: payload };
    default:
      return state;
  }
};
export default statsReducer;
