import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import MapView from "../components/MapView";
import PlaceList from "../components/PlaceList/PlaceList";

const Home = ({ searchQuery }) => {
  const [places, setPlaces] = useState([]);

  // Fetch ONCE
  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await fetch("http://localhost:4000/valley-roots/coffeeShops");
      const data = await res.json();
      setPlaces(Array.isArray(data) ? data : []);
    };
    fetchPlaces();
  }, []);

  // Filter based on searchQuery
  const filteredPlaces = useMemo(() => {
    const q = (searchQuery || "").trim().toLowerCase();
    if (!q) return places;

    return places.filter((p) => {
      const name = (p.name || "").toLowerCase();
      const city = (p.city || "").toLowerCase();
      const address = (p.address || "").toLowerCase();
      const categories = Array.isArray(p.categories)
        ? p.categories.map((c) => (c || "").toLowerCase())
        : [];

      return (
        name.includes(q) ||
        city.includes(q) ||
        address.includes(q) ||
        categories.some((c) => c.includes(q))
      );
    });
  }, [places, searchQuery]);

  return (
    <div className="home">
      <div className="hero">
        <h1>Valley Roots...</h1>
        <h3>Discover small and local businesses in Arizona!</h3>
      </div>

      <div className="content-grid">
        <PlaceList places={filteredPlaces} />
        <MapView places={filteredPlaces} />
      </div>
    </div>
  );
};

export default Home;
