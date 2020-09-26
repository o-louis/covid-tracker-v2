export function formatEvolution(today, yesterday) {
    const { todayCases, todayRecovered, todayDeaths } = today;
    const total = todayCases && yesterday.todayCases ?
        !(todayCases > yesterday.todayCases) : null;
    const recovered = todayRecovered && yesterday.todayRecovered ?
        !(todayRecovered > yesterday.todayRecovered) : null;
    const deaths = todayDeaths && yesterday.todayDeaths ?
        !(todayDeaths > yesterday.todayDeaths) : null;
    return {
        total,
        active: false,
        recovered,
        deaths
    };
}

export function formatCountries(data) {
    const saveDatas = data.map((countryData) => {
        const { countryInfo, country, cases, active, recovered, deaths } = countryData;
        const { lat, long, flag } = countryInfo;
        return {
          name: country,
          flag,
          lat,
          lng: long,
          cases,
          active,
          recovered,
          deaths
        };
    });
    return saveDatas;
}

export function formatYesterdayCountries(data, countries) {
    const saveDatas = data.map((countryData, index) => {
        const { country, cases } = countryData;
        return {
            name: country,
            report: countries[index].cases - cases
        }
    });
    return saveDatas;
}