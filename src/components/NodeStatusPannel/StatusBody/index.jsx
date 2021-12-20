import React from "react";
import { useSelector } from "react-redux";
import StatusNode from "./NodeBody";
import StatsBody from "./StatsBody";
import './status-body.scss';

const StatusBody = () => {
  const { node } = useSelector((state) => state.selectedNode);
  const { stats } = useSelector((state) => state.stats);

  return (
    <div className='status-body-container'>
       {/* <div className="status-body-title">Statistics</div> */}
      {node ? 
      
          <StatusNode node={node} /> :
           <StatsBody stats={stats} /> 
        
      }
    </div>
  );
};

export default StatusBody;
