import React from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'

const libraries = 'places'
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}
const center = {
  lat: 30.2672,
  lng: -97.7431
}

export default function GoogleMaps() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if(loadError) return 'Error loading maps'
  if(isLoaded) return 'Loading Maps';




  return (
    <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} ></GoogleMap>
    </div>
  )
}
