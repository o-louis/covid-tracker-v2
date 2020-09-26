import React, {useState, useEffect} from 'react';

import Cases from "./components/Cases/Cases";
import Map from "./components/Map/Map";
import Infos from "./components/Infos/Infos";
import Modal from "./components/Modal/Modal";
import CountriesReport from "./components/CountriesReport/CountriesReport";

import {
  fetchAll,
  fetchCountry,
  fetchCountries,
  fetchYesterdayData,
  fetchYesterdayCountriesData
} from "./utils/api_config";

import {
  formatEvolution,
  formatCountries,
  formatYesterdayCountries
} from "./utils/formatData";

import { convertDate } from "./utils/tools";

import Loader from 'react-loader-spinner';

import './App.scss';

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(false);
  const [country, setCountry] = useState(null);
  const [evolution, setEvolution] = useState({});
  const [dataCountries, setDataCountries] = useState(null);
  const [yesterdayData, setYesterdayData] = useState(null);

  // Fetch Global Data
  useEffect(() => {
    fetchAll()
      .then(response => {
        setData(response);
      }).catch(error => console.log(error));
  }, []);

  // Fetch Global Data from yesterday
  useEffect(() => {
    if (data) {
      fetchYesterdayData()
        .then((response) => {
            const result = formatEvolution(data, response);
            setEvolution(result);
        }).catch(error => console.log(error));
    }
  }, [data]);

  // Fetch Countries Data
  useEffect(() => {
      fetchCountries()
        .then((response) => {
          const result = formatCountries(response);
          setDataCountries(result);
        }).catch(error => console.log(error));
  }, []);

  // Fetch Countries Data from yesterday
  useEffect(() => {
    if (dataCountries) {
      fetchYesterdayCountriesData()
        .then((response) => {
            const result = formatYesterdayCountries(response, dataCountries);
            setYesterdayData(result);
        }).catch(e => console.error(e));
    }
  }, [dataCountries]);

  // Handle Input for search country
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length >= 2) {
      fetchCountry(input)
        .then(response => {
          if (!response.message) {
            setCountry(response)
          } else {
            setCountry(null);
          } 
        }).catch(err => console.log(err));
    } else setCountry(null);
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setCountry(null);
    }
  }

  // Modal
  const toggleModal = () => {
    setModal(modal => !modal)
  }

  const toggleDarkMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    setDarkMode(state => !state)
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
        <h1>COVID-19 Coronavirus Tracker</h1>
        <div className="theme" onClick={() => toggleDarkMode(darkMode)}>
          <MoonIcon darkMode={darkMode} />
        </div>
          {
            (!data || !dataCountries || !evolution || !yesterdayData) ? (
              <div className="loader-container">
                <Loader type="ThreeDots" color="#46E4B2" height={80} width={80} />
              </div>
            ) : (
              <>
                <h4>Last Update: {convertDate(data.updated)}</h4>
                <div className="main">
                  <section>
                    <Cases data={data} evolution={evolution} />
                    <Map data={dataCountries} country={country} darkMode={darkMode} />
                    <Infos toggleModal={toggleModal}/>
                  </section>

                  <aside>
                    <CountriesReport 
                      input={input}
                      country={country}
                      data={dataCountries}
                      yesterdayData={yesterdayData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                  </aside>
                </div>
              </>
            )
          }
        </div>
      </div>
      { modal && <Modal toggleModal={toggleModal} /> }
    </>
  );
}

const MoonIcon = ({ darkMode }) => (
  darkMode ? (
    <svg viewBox="0 0 24 24" stroke="#ffce45"
    strokeWidth="1.5" fill="#ffce45" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" stroke="#C1C1C1"
    strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
)

export default App;
