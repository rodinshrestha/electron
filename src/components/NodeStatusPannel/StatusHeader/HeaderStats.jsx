import React from "react";
import fileSize from "filesize";
import { motion } from "framer-motion";
import { statusPanelAnimation } from "../../../config/AnimationConfig";

const HeaderStats = ({ stats }) => {
  return (
    <motion.div
      variants={statusPanelAnimation()}
      initial="initial"
      animate="animate"
      exit="exit"
      className="status-network-content"
    >
      <div className="status-network-stats-content">
        <div className="status-network-stats-text">Status :</div>
        <div
          className={` status-network-stats-icon ${stats?.status || "online"}`}
        />
      </div>

      <div className="status-network-stats-capacity-container">
        <div className="status-network-stats-capacity-text">
          Network Capacity
        </div>

        <div className="status-network-stats-capacity-value">
          {stats?.activeStorage?.totall &&
            fileSize(stats?.activeStorage?.totall?.toFixed(2) * 1000000000)}
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderStats;
