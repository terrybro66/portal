import React, { useState, useRef } from "react";
import Map, { Layer, Marker } from "react-map-gl";
import styles from "./Graph.module.css";

function Graph({ handleMenuClick }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentMarker, setCurrentMarker] = useState(null);
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState(null);
  const [modalLeft, setModalLeft] = useState(0);
  const [modalTop, setModalTop] = useState(0);
  const [viewport, setViewport] = useState({
    longitude: 184.931386,
    latitude: -19.761891,
    zoom: 12.2,
    pitch: 30,
    bearing: 20,
  });
  const mapRef = useRef();
  const markers = [
    {
      longitude: 184.931386,
      latitude: -19.761891,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "pop",
      index: 1,
    },
    {
      longitude: 184.941386,
      latitude: -19.761891,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "rtf",
      index: 2,
    },
    {
      longitude: 184.961386,
      latitude: -19.761891,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "flight",
      index: 3,
    },
    {
      longitude: 184.931386,
      latitude: -19.751891,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.",
      name: "pop",
      index: 4,
    },
    {
      longitude: 184.941386,
      latitude: -19.741891,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      name: "rtf",
      index: 5,
    },
    {
      longitude: 184.961386,
      latitude: -19.731891,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "flight",
      index: 6,
    },
    // Add more markers as needed
  ];

  function handleMouseEnter(marker, event) {
    setHoveredMarkerIndex(marker.index); // Set the hovered marker index
    console.log(hoveredMarkerIndex, marker.index);
    setModalOpen(false); // Close any open modals
    setCurrentMarker(marker); // Set the current marker
    const x = event.clientX;
    const y = event.clientY;
    setModalLeft(x + 140); // Add an offset
    setModalTop(y + 40); // Add an offset
    setModalOpen(true); // Open a new modal
  }

  function handleCloseModal() {
    setHoveredMarkerIndex(null); // Set the hovered marker index

    setModalOpen(false);
  }

  return (
    <>
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        interactive={false}
        onLoad={({ map }) => {
          mapRef.current = map;
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
            text={marker.text}
            name={marker.name}
            onClick={() => {
              handleMenuClick(marker.name);
            }}
          >
            <div
              className={styles.marker}
              onMouseEnter={(event) => handleMouseEnter(marker, event)}
            ></div>
          </Marker>
        ))}
      </Map>

      {isModalOpen && (
        <div
          className={`${styles.modal} ${isModalOpen ? styles.open : ""}`}
          style={{ top: `${modalTop}px`, left: `${modalLeft}px` }}
        >
          <div onClick={() => handleMenuClick(currentMarker.name)}>
            {currentMarker.name}
          </div>
          <span
            className={styles.closeModal}
            onClick={() => handleCloseModal()}
          >
            X
          </span>
        </div>
      )}
      <div className={styles.textPanels}>
        <h1>The Power of Code to Make Data Beautiful </h1>
        {markers.map((marker) => (
          <p
            className={
              marker.index === hoveredMarkerIndex ? styles.hovered : ""
            }
          >
            {marker.text}
          </p>
        ))}
      </div>
    </>
  );
}

export default Graph;
