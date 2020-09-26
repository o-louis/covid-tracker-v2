import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './Cases.scss';

const Cases = ({ data, evolution }) => {
    const { cases, active, recovered, deaths } = data;
    const totalCases = cases.toLocaleString("en-EN");
    const activeCases = active.toLocaleString("en-EN");
    const recoveredCases = recovered.toLocaleString("en-EN");
    const deathsCases = deaths.toLocaleString("en-EN");

    const defineStatus = (state) => (
        { icon: state ? faCaretDown : faCaretUp, color: state ? "#75F257" : "#FB5757" }
    )

    const res = {
        total: defineStatus(evolution.total),
        active: defineStatus(evolution.active),
        recovered: defineStatus(evolution.recovered),
        deaths: defineStatus(evolution.deaths)
    }

    return (
        <div className="cases-container">
            <div className="cases-container__item total">
                <span className="cases-container__title">Total Cases</span>
                <span className="cases-container__number">
                    {totalCases}
                    <FontAwesomeIcon icon={res.total.icon} style={{color: res.total.color}}/>
                </span>
            </div>
            <div className="cases-container__item active">
                <span className="cases-container__title">Active Cases</span>
                <span className="cases-container__number">
                    {activeCases}
                    <FontAwesomeIcon icon={res.active.icon} style={{color: res.active.color}}/>
                </span>
            </div>
            <div className="cases-container__item recovered">
                <span className="cases-container__title">Recovered Cases</span>
                <span className="cases-container__number">
                    {recoveredCases}
                    <FontAwesomeIcon icon={res.recovered.icon} style={{color: res.recovered.color}}/>
                </span>
            </div>
            <div className="cases-container__item deaths">
                <span className="cases-container__title">Deaths</span>
                <span className="cases-container__number">
                    {deathsCases}
                    <FontAwesomeIcon icon={res.deaths.icon} style={{color: res.deaths.color}}/>
                </span>
            </div>
        </div>
    )
}

export default Cases;
