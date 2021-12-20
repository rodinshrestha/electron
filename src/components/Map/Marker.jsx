import React, { memo } from "react";
import { Marker } from "react-map-gl";

const MapMarker = ({ latitude, longitude, onClick, captureClick, status }) => {
 
  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      captureClick={captureClick || false}
      onClick={() => onClick()}
    >
      <div className="marker online" />
    </Marker>
  );
};

export default memo(MapMarker);
