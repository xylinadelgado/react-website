import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "420px",
  borderRadius: "16px",
};

const center = { lat: 33.4484, lng: -112.074 };

export default function MapView({ searchQuery }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      const res = await fetch("http://localhost:4000/valley-roots/coffeeShops");
      const data = await res.json();
      setCoffeeShops(data);
    };

    fetchCoffeeShops();
  }, []);

  const filteredShops = useMemo(() => {
    const q = (searchQuery || "").trim().toLowerCase();
    if (!q) return coffeeShops;

    return coffeeShops.filter((shop) => {
      const name = (shop.name || "").toLowerCase();
      const city = (shop.city || "").toLowerCase();
      const address = (shop.address || "").toLowerCase();
      const categories = Array.isArray(shop.categories)
        ? shop.categories.map((c) => (c || "").toLowerCase())
        : [];

      return (
        name.includes(q) ||
        city.includes(q) ||
        address.includes(q) ||
        categories.some((c) => c.includes(q))
      );
    });
  }, [coffeeShops, searchQuery]);

  if (loadError) return <div>Map failed to load.</div>;
  if (!isLoaded) return <div>Loading map…</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {filteredShops.map((shop) => (
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
