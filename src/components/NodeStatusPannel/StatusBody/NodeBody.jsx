import React  from "react";
import fileSize from "filesize";
import { motion } from "framer-motion";
import { statusPanelAnimation } from "../../../config/AnimationConfig";


const NodeBody = (props) => {
  const { node } = props;



  return (
    
      <motion.div
        variants={statusPanelAnimation()}
        initial="initial"
        animate="animate"
        exit="exit"
        className="status-node-items"
      >
        <div className="status-body-title">Statistics</div>
        <div className="status-node-item">
          <p className="title">Allocated Network</p>
          <p className="value">
            {node?.storage?.allocated && fileSize(node?.storage?.allocated?.toFixed(2) * 1000000000 || 0)}
          </p>
        </div>
        <div className="status-node-item">
          <p className="title">Currently storing encrypted & shared files</p>
          <p className="value">
            {node?.storage?.storing && fileSize(node?.storage?.storing?.toFixed(2) * 1000000000 || 0)}
          </p>
        </div>
        <div className="status-node-item">
          <p className="title">Available Storage</p>
          <p className="value">
            {node?.storage?.left && fileSize(node?.storage?.left?.toFixed(2) * 1000000000 || 0)}
          </p>
        </div>
      </motion.div>
    
  );
};

export default NodeBody;
