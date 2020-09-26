import React from 'react';
import { Popup, Circle } from 'react-leaflet';

import './PopupMap.scss';

const PopupMap = ({ country, index }) => {
    const { flag, name, cases, active, recovered, deaths, lat, lng } = country;
    const pos = [lat, lng];
    const radius = Math.sqrt(cases * 200000);

    return (
        <Circle
            key={index}
            center={pos}
            color="#FB5151"
            fillColor="#FB5151"
            radius={radius}
            className="test"
        >
            <Popup>
                <div className="map-container__infos">
                    <h1 className="map-container__country-name">{name}</h1>
                    <img
                        src={flag}
                        alt={name}
                        className="map-container__flag"
                    />
                </div>
                <hr />
                <div className="map-container__cases">
                    <div className="total">
                        <span className="circle"></span>
                        <span>{cases.toLocaleString("en-EN")} cases</span>
                    </div>
                    <div className="active">
                        <span className="circle"></span>
                        <span>{active.toLocaleString("en-EN")} active</span>
                    </div>
                    <div className="recovered">
                        <span className="circle"></span>
                        <span>{recovered.toLocaleString("en-EN")} recovered</span>
                    </div>
                    <div className="deaths">
                        <span className="circle"></span>
                        <span>{deaths.toLocaleString("en-EN")} deaths</span>
                    </div>
                </div>
            </Popup>
        </Circle>
    )
}

export default PopupMap;
