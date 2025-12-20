import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "420px",
  borderRadius: "16px",
};

const center = { lat: 33.4484, lng: -112.074 };

export default function MapView() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Map failed to load.</div>;
  if (!isLoaded) return <div>Loading map…</div>;

  return <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11} />;
  console.log("MAPS KEY?", !!import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

}
