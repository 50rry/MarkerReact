import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import marker from "./marker.svg"
import {fetchPositions} from "./actions";
const CustomMarker = ({ lat, lng }) => (
    <Marker
        position={{ lat: lat, lng: lng }}
        icon={{
            url: marker,
            scaledSize: new window.google.maps.Size(40, 40)
        }}
    />
);
function Map (){
    const markers = useSelector(state => state.markers);
    const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPositions());
        const intervalId = setInterval(() => {
            dispatch(fetchPositions());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    if(!isLoaded){return (<div><p>...</p></div>)}
    else{
        return <GoogleMap zoom={12} center={{lat: 51.3119264, lng: 9.4950804}} mapContainerClassName={"mapContainer"}>{markers.map(marker => (
            <CustomMarker key={marker.id} lat={marker.latitude} lng={marker.longitude}/>
        ))}</GoogleMap>
    }
}

export default Map