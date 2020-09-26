import React from 'react';

import PopupMap from './PopupMap/PopupMap';
import { Map as LeafletMap,TileLayer} from 'react-leaflet';

import './Map.scss';

import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const LIGHT_MODE = process.env.REACT_APP_LIGHT_MODE;
const DARK_MODE = process.env.REACT_APP_DARK_MODE;

const urlLightMode = `https://api.mapbox.com/styles/v1/${LIGHT_MODE}/tiles/256/{z}/{x}/{y}@2x?access_token=${ACCESS_TOKEN}`;
const urlDarkMode = `https://api.mapbox.com/styles/v1/${DARK_MODE}/tiles/256/{z}/{x}/{y}@2x?access_token=${ACCESS_TOKEN}`;
const attr = "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>";

const Map = ({ data, country, darkMode }) => {
    const position =  country ? [country.countryInfo.lat, country.countryInfo.long] : [51.505, -0.09];
    const zoom = country ? 6 : 2;
    const url = darkMode ? urlDarkMode : urlLightMode;

    return (
        <div className="map-container">
            <h3>Affected Country</h3>
            <LeafletMap center={position} zoom={zoom} animate={true}>
            <TileLayer
                attribution={attr}
                url={url}
            />
            {
                data.map((country, index) => {
                    if (country.lat && country.lng) {
                        return <PopupMap key={index} country={country} index={index}/>
                    }
                    return null;
                })
            }
            </LeafletMap>
        </div>
    );
}

export default Map;