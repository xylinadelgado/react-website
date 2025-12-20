import React from 'react'
import './Home.css'
import MapView from "../components/MapView";

const Home = () => {
  return (
    <div className="home">
      <h1>Valley Roots...</h1>
      <h3>Discover small and local businesses in Arizona!</h3>
      <div className="map-wrapper">

      {/* Google Map */}
      <MapView/>
      </div>

    </div>
  )
}

export default Home
