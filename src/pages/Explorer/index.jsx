import React from "react";
import { BounceLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { getNodes } from "../../redux/NodeExplorer/nodes";
import Map from "../../components/Map";
import SideBar from "../../components/SideBar";
import NodeStatusPannel from "../../components/NodeStatusPannel";
import { getStats } from "../../redux/NodeExplorer/stats";
import Error from "../../components/Error";
import Layout from "../../components/Layout";
import "./explorer.scss";

const Explorer = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getNodes());
    dispatch(getStats());
  }, [dispatch]);

  const nodes = useSelector((state) => state.nodes);
  const stats = useSelector((state) => state.stats);

  // if (nodes.status === "rejected" && stats.status === "rejected")
  //   return <Error msg="Something wrong with server. Please try again" />;

  return (
    <Layout>
      {nodes.status === "idle" ||
      (nodes.status === "pending" && stats.status === "idle") ||
      stats.status === "pending" ? (
        <div className="explorer-loading">
          <BounceLoader size={25} />
        </div>
      ) : (
        <div className="explorer">
          <NodeStatusPannel />

          <Map geojson={nodes?.nodes} />
        </div>
      )}
    </Layout>
  );
};

export default Explorer;
