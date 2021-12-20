import { combineReducers } from "redux";
import selectedNode from "./NodeExplorer/selectedNodes";
import stats from "./NodeExplorer/stats";
import nodes from "./NodeExplorer/nodes";
import login from "./Login";

export default combineReducers({
  nodes,
  selectedNode,
  stats,
  login,
});
