import React, { useState } from 'react';

import logo from "../../assets/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideCough, faChartLine } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss';

const DASHBOARD_SECTION = "dashboard";
const SYMPTOMS_SECTION = "symptoms";

const Navbar = () => {
    const [dashboard, setDashboard] = useState(true);
    const [symptoms, setSymptoms] = useState(false);

    const toggleSelected = (page) => {
        if (page === DASHBOARD_SECTION) {
            setDashboard(true);
            setSymptoms(false);
        } else if (page === SYMPTOMS_SECTION){
            setDashboard(false);
            setSymptoms(true);
        }
    }

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="coronavirus" />
            </div>

            <ul className="navbar__container">
                <li className={`navbar__link ${dashboard ? "selected" : ""}`}
                    onClick={() => toggleSelected("dashboard")}>
                    <FontAwesomeIcon icon={faChartLine} />
                    Dashboard
                </li>
                <li className={`navbar__link ${symptoms ? "selected" : ""}`}
                    onClick={() => toggleSelected("symptoms")}>
                    <FontAwesomeIcon icon={faHeadSideCough} />
                    Symptoms
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
