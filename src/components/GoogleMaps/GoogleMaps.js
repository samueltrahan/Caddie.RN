import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'




export default function GoogleMaps({lat, lng}) {
  function Map() {
    return (
      <GoogleMap 
      defaultZoom={19}
      defaultCenter={{
        lat: lat,
        lng: lng
      }}
      />
      )
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div style={{width: '100vw', height: '45vh'}}>
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '400px'}} />}
        mapElement={<div style={{height: '100%'}} />}
        />
    </div>
  )
}

