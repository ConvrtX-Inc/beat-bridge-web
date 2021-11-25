import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./GoogleMapContainer.scss";
import pinIcon from "../../assets/icons/location-pin.svg";
import { Container } from "react-bootstrap";

const defaultMapOptions = {
  fullscreenControl: false,
  zoomControl: false,
};

const GOOGLE_MAP_API_KEY: any = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

function GoogleMapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  // mock data for markers/location pins
  const markers = [
    { id: 1, position: { lat: 17.6227423786096, lng: 121.0817604527274 } },
    { id: 2, position: { lat: 51.12322, lng: 63.60597 } },
    { id: 3, position: { lat: 52.6227423786096, lng: 121.0817604527274 } },
    { id: 4, position: { lat: 47.058161, lng: -106.394542 } },
    { id: 5, position: { lat: 12.580318, lng: 21.222655 } },
    { id: 6, position: { lat: 70.562961, lng: -32.74219 } },
  ];

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerClassName="map-container"
      options={defaultMapOptions}
      center={markers[0].position}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map(({ id, position }) => (
        <Marker icon={pinIcon} key={id} position={position}></Marker>
      ))}
    </GoogleMap>
  ) : (
    <Container>Map Not Loaded</Container>
  );
}

export default React.memo(GoogleMapContainer);
