import React, { useState, useRef } from "react";
import { markers } from "./mapMarkers";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

// Used Google Maps Platform API for development
// https://visgl.github.io/react-google-maps/

const Maps = () => {
  const [open, setOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const markerRefs = useRef({});

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="h-[calc(100%-3px)] w-full -translate-y-[2px]">
        <Map
          defaultCenter={{ lat: 37.79638976686472, lng: -122.43365496241384 }}
          defaultZoom={6}
          minZoom={2}
          maxZoom={14}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={MAP_ID}
          restriction={{
            latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
            strictBounds: true,
          }}
        />
        {markers.map((marker, index) => (
          <AdvancedMarker
            key={index}
            position={marker.position}
            title={marker.title}
            ref={(ref) => (markerRefs.current[index] = ref)}
            onClick={() => {
              setSelectedMarker(marker);
              setOpen(true);
            }}
          />
        ))}

        {open && selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setOpen(false)}
            anchor={markerRefs.current[markers.indexOf(selectedMarker)]}
          >
            <div className="min-w-[200px] p-2 text-center">
              <h3 className="text-lg mb-2">{selectedMarker.title}</h3>
              {selectedMarker.description && (
                <p className="text-sm text-gray-600 mb-2">
                  {selectedMarker.description}
                </p>
              )}
              {selectedMarker.date && (
                <p className="text-sm text-gray-500 italic">
                  Visited: {selectedMarker.date}
                </p>
              )}
            </div>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
};

export default Maps;
