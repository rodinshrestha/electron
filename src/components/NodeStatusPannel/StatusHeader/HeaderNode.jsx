import React from "react";
import fileSize from "filesize";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import { statusPanelAnimation } from "../../../config/AnimationConfig";

const HeaderNode = (props) => {
  const { node } = props;

  return (
    <motion.div
      variants={statusPanelAnimation()}
      initial="initial"
      animate="animate"
      exit="exit"
      className="status-node-content"
    >
      <div className="status-node-stats-container">
        
          <div className="status-node-stats-text">Status:</div>
          <div
            className={`status-node-stats-icon ${node?.status || "online"}`}
          />
        
      </div>

      <div className="status-node-location">
        <div className='status-node-location-text'>

        Node Provider &nbsp;|</div>
        <ReactCountryFlag
          countryCode={node?.location?.country || ""}
          aria-label="country-flag"
          svg
        />
        {node?.location?.city}
      </div>

      <div className="status-node-network-capacity-container">
        <div className="status-node-network-capacity-text">
          Network Capacity
        </div>

        <div className="status-node-network-capacity-value">
          {node?.storage?.allocated &&
            fileSize(node?.storage?.allocated?.toFixed(2) * 1000000000)}
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderNode;
