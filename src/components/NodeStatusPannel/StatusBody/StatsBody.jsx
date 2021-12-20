import React  from "react";
import fileSize from "filesize";
import { motion } from "framer-motion";
import {statusPanelAnimation} from '../../../config/AnimationConfig'


const StatsBody = ({stats}) => {
  

  return (
   
      <motion.div
        variants={statusPanelAnimation()}
        initial="initial"
        animate="animate"
        exit="exit"
        className="stats-body-items"
      >
        <div className="status-body-title">Statistics</div>
        <div className="status-body-item">
          <p className="title">Total Network</p>
          <p className="value">
            { stats?.activeStorage?.totall && fileSize(stats?.activeStorage?.totall?.toFixed(2)*1000000000)}
          </p>
        </div>
        <div className="status-body-item">
          <p className="title">Currently storing encrypted & shared files</p>
          <p className="value">
          {stats?.activeStorage?.storing && fileSize(stats?.activeStorage?.storing?.toFixed(2)*1000000000)}
          </p>
        </div>
        <div className="status-body-item">
          <p className="title">Available Storage</p>
          <p className="value">
          {stats?.activeStorage?.left && fileSize(stats?.activeStorage?.left?.toFixed(2)*1000000000)}
          </p>
        </div>
        <div className="status-body-item">
          <p className="title">Active Nodes</p>
          <p className="value">
            {stats?.activeNodes}
          </p>
        </div>
        <div className="status-body-item">
          <p className="title">Total Nodes</p>
          <p className="value">
          {stats?.allTimeNodes}
          </p>
        </div>
      </motion.div>
  
  );
};

export default StatsBody;
