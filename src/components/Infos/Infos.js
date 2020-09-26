import React from 'react';

import SymptomsImg from '../../assets/symptoms.png';

import './Infos.scss';

const Infos = ({ toggleModal }) => {
    return (
        <div className="infos-container">
            <div className="infos-container__item">
                <h3>Symptoms of Covid-19</h3>
                <div className="infos-container__infos">
                    <div className="infos-container__img--rounded">
                        <img src={SymptomsImg} alt="symptoms"/>
                    </div>
                    <div className="infos-container__description">
                        <p>Read carefully the symptoms of Corona Virus</p>
                        <button onClick={toggleModal}>Read more</button>
                    </div>
                </div>
            </div>
            <div className="infos-container__item">
                <h3>Latest News</h3>
                <div className="infos-container__infos">
                    <div className="infos-container__live">Live</div>
                    <div className="infos-container__description">
                        <a href="https://edition.cnn.com/world/live-news/coronavirus-pandemic-09-25-20-intl/index.html" target="__blank">
                            <b>The US is still in its first Covid-19 wave and should be prepared for the "challenge" of fall and winter..</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infos;
