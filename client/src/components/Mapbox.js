import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Markers } from '../components/Marker';

export default function Mapbox(props) {
  const [viewport, setViewport] = useState({
    width: 300,
    height: 300,
    latitude: props.coordinates[1],
    longitude: props.coordinates[0],
    zoom: 14,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1Ijoic2FmdGVyZW8iLCJhIjoiY2tsejR3eGR3MXM4bDJ3bzM3N3l6YXJ6cSJ9.dAgHBb17Spk4z8nS7u87qA"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Markers coordinates={props.coordinates} />
    </ReactMapGL>
  );
}
