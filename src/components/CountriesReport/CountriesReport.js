import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { setReport } from '../../utils/tools';

import './CountriesReport.scss';

const CountriesReport = ({ data, country, yesterdayData, input, handleChange, handleSubmit }) => {
    let reportCountry = null;
    if (country) {
        reportCountry = yesterdayData.find((item) => item.name === country.country);
        reportCountry = setReport(reportCountry.report);
    }

    return (
        <div className="countries-container">
            <h3>Countries Report</h3>
            <div className="countries-container__search">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="countries-container__input"
                        placeholder="Search Country"
                        value={input}
                        onChange={handleChange}
                    />
                    <button type="submit" >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            <div className="countries-container__report">
                {
                    !country ?
                        data.map((country, index) => {
                            const { flag, name, cases } = country;
                            let { report } = yesterdayData[index];
                            report = setReport(report);
                            return (
                                <CountryReport
                                    key={index}
                                    flag={flag}
                                    name={name}
                                    report={report}
                                    cases={cases}
                                />
                            )
                        }) : (
                            <CountryReport
                                flag={country.countryInfo.flag}
                                name={country.country}
                                report={reportCountry}
                                cases={country.cases}
                            />
                    )
                }
            </div>
        </div>
    )
}

const CountryReport = ({ flag, name, report, cases}) => {
    return (
        <div>
            <img src={flag} alt={name} />
            <div className="countries-container__infos">
                <div>{name}</div>
                <div className="report">{report}</div>
            </div>
            <div className="countries-container__cases">{cases.toLocaleString("en-EN")}</div>
        </div>
    )
}

export default CountriesReport;
