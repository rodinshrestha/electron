import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Popup } from "react-map-gl";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const MapPopup = (props) => {
  const {
    closeOnClick,
    closeButton,
    onClick,
    anchor,
    tipSize,
    offsetLeft,
    offsetTop,
    dynamicPosition,
  } = props;


  const { node } = useSelector((state) => state.selectedNode);
  const computerType = node?.computerType;
  const location = node?.location;

  const name = node?.name;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="node-popup-wrapper"
    >
      <Popup
        longitude={location?.ll[1]}
        latitude={location?.ll[0]}
        closeOnClick={closeOnClick || false}
        closeButton={closeButton || false}
        onClose={onClick}
        anchor={anchor || "top"}
        tipSize={tipSize || 10}
        offsetLeft={offsetLeft || 0}
        offsetTop={offsetTop || 0}
        dynamicPosition={dynamicPosition || false}
      >
        <div className="node-popup">
          <div className="node-popup-content">
            <div className="node-popup-status">
              Status: <div className="online" />
            </div>

            <div className="node-popup-location">
              Node Provider |{" "}
              <ReactCountryFlag
                countryCode={location?.country || ""}
                aria-label="country-flag"
                svg
              />{" "}
              {location?.city}
            </div>

            <div className="node-popup-name">{name}</div>

            <div className="node-popup-type">
              Computer Type: {computerType || "Unknown"}
            </div>
          </div>
        </div>
      </Popup>
    </motion.div>
  );
};

export default MapPopup;
