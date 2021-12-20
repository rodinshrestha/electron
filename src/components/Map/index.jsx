import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import Marker from "./Marker";
import { getSelectedNode } from "../../redux/NodeExplorer/selectedNodes";
import Popup from "./Popup";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./map-style.scss";

const Map = ({ geojson }) => {
  const [viewport, setViewport] = React.useState("");
  const [lng, setLng] = React.useState("");
  const [lat, setLat] = React.useState("");
  const mapRef = React.useRef();
  const dispatch = useDispatch();
  const { node } = useSelector((state) => state.selectedNode);

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLng(position?.coords?.longitude || 18.0649);
          setLat(position?.coords?.latitude || 59.33258);
        },
        () => {
          setLng(18.1282);
          setLat(18.0686);
        }
      );
    } else {
      setLng(60.1282);
      setLat(18.0686);
    }
  }, []);

  React.useEffect(() => {
    if (viewport) return;
    if (lng && lat) {
      setViewport({
        latitude: lat,
        longitude: lng,
        zoom: 1,
      });
    }
  }, [lng, lat, viewport]);

  //Only rerender markers if props.data has chaasdfasdfnged

  const markers = React.useMemo(
    () =>
      geojson &&
      geojson.length &&
      geojson?.map((marker, i) => (
        <Marker
          key={i}
          index={i}
          longitude={marker?.location?.ll[1]}
          latitude={marker?.location?.ll[0]}
          status={marker?.status || "online"}
          onClick={() => dispatch(getSelectedNode(marker))}
          captureClick={true}
        />
      )),
    [geojson, dispatch]
  );

  return (
    <div className="map">
      {viewport && (
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/jssecurity/ckx4m410i04ye14tdxg10a2zt"
          mapboxApiAccessToken="pk.eyJ1IjoianNzZWN1cml0eSIsImEiOiJja3dseW9zNjkyNnQwMnZwbXdlZThraXVtIn0.UEsyXlCSuno4XdbNtiACBw"
          ref={mapRef}
          height="100%"
          width="100%"
          attributionControl={false}
        >
          {markers}

          {typeof node === "object" && Object.keys(node).length && (
            <Popup
              closeOnClick={true}
              closeButton={true}
              onClick={() => dispatch(getSelectedNode(""))}
              anchor="bottom"
              tipSize={7}
              offsetLeft={5}
              offsetTop={-2}
              dynamicPosition={true}
            />
          )}

          <Geocoder
            mapRef={mapRef}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={(viewport) => setViewport(viewport)}
            reverseGeocode={true}
          />

          <GeolocateControl />
          <NavigationControl />
        </ReactMapGL>
      )}
    </div>
  );
};

export default Map;
