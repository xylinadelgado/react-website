import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

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

  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      const res = await fetch(
        "http://localhost:4000/valley-roots/coffeeShops"
      );
      const data = await res.json();
      setCoffeeShops(data);
      console.log("Fetched shops:", data);

    };

    fetchCoffeeShops();
  }, []);

  if (loadError) return <div>Map failed to load.</div>;
  if (!isLoaded) return <div>Loading map…</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
    >
      {coffeeShops.map((shop) => (
        <Marker
          key={shop._id}
          position={{
            lat: shop.location.coordinates[1],
            lng: shop.location.coordinates[0],
          }}
          title={shop.name}
        />
      ))}
    </GoogleMap>
  );
}
