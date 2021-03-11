import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FmdGVyZW8iLCJhIjoiY2tsejR3eGR3MXM4bDJ3bzM3N3l6YXJ6cSJ9.dAgHBb17Spk4z8nS7u87qA';

const Map = (props) => {
  const mapContainerRef = useRef(null);

  console.log(props);
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [props.coordinates[0], props.coordinates[1]],
      zoom: 14,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    new mapboxgl.Marker().setLngLat([props.coordinates[0], props.coordinates[1]]).addTo(map);
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
