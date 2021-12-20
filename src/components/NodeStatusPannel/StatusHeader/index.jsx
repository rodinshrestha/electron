import React from "react";
import { useSelector } from "react-redux";
import HeaderNode from "./HeaderNode";
import HeaderStats from "./HeaderStats";
import './status-header.scss'

const StatusHeader = ({ setShowPannel, showPannel }) => {
  const { node } = useSelector((state) => state.selectedNode);
  const { stats } = useSelector((state) => state.stats);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="status-header-container">
    
        {windowWidth < 1024 && (
          <div
            className="arrow-button-container"
            onClick={() => setShowPannel((prev) => !prev)}
          >
            <div
              className={`${
                showPannel ? "down-arrow-button" : "up-arrow-button"
              }`}
            />
          </div>
        )}

        {node ? (
          <HeaderNode node={node} />
        ) : (
          <HeaderStats
            stats={stats}
            setShowPannel={setShowPannel}
            showPannel={showPannel}
          />
        )}
     
    </div>
  );
};

export default StatusHeader;
