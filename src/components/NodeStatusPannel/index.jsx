import React from "react";

import StatusHeader from "./StatusHeader";
import StatusBody from "./StatusBody";

import './node-status-pannel.scss'

const NodeStatusPannel = () => {
  const [showPannel, setShowPannel] = React.useState(false);

  return (
    
      <div className={`node-status-pannel-container ${showPannel && 'showpannel'} `}>
       
        
         
          <StatusHeader setShowPannel={setShowPannel} showPannel={showPannel} />
          <StatusBody />
      
      </div>
   
  );
};

export default NodeStatusPannel;
