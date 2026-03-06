import React from "react";
import "./PlaceCard.css";

export default function PlaceCard({ place }) {
  const categories = Array.isArray(place.categories) ? place.categories : [];

  return (
    <div className="place-card">
      <div className="place-card__title">{place.name}</div>

      <div className="place-card__meta">
        {place.address}, {place.city}, {place.state}
      </div>

      {categories.length > 0 && (
        <div className="place-card__categories">{categories.join(" • ")}</div>
      )}

      {place.websiteUrl && (
        <a
          className="place-card__link"
          href={place.websiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      )}
    </div>
  );
}
