import React from 'react';

import listSymptoms from '../../assets/list-symptoms.png';
import listSymptomsBis from '../../assets/list-symptoms-2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./Modal.scss";

const Modal = ({ toggleModal }) => {
    return (
        <div className="modal-container">
            <div className="modal-container__box">
                <FontAwesomeIcon icon={faTimes} onClick={toggleModal} />
                <img src={listSymptoms} alt="list-symptoms" />
                <img src={listSymptomsBis} alt="list-symptoms" />
            </div>
        </div>
    )
}

export default Modal;
