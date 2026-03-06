import React from "react";
import PlaceCard from "../PlaceCard/PlaceCard";
import "./PlaceList.css";

export default function PlaceList({ places }) {
  return (
    <div className="place-list">
      <div className="place-list__header">Results ({places.length})</div>

      {places.map((p) => (
        <PlaceCard key={p._id} place={p} />
      ))}
    </div>
  );
}
