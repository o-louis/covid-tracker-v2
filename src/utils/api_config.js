import axios from 'axios';

import { ALL, COUNTRIES } from "./api_url";

export async function fetchAll() {
    try {
        const response = await axios(ALL);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function fetchYesterdayData() {
    try {
        const response = await axios(`${ALL}?yesterday=true`);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function fetchCountries() {
    try {
        const response = await axios(`${COUNTRIES}?sort=cases`);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function fetchYesterdayCountriesData() {
    try {
        const response = await axios(`${COUNTRIES}?yesterday=true&sort=cases`);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function fetchCountry(country) {
    try {
        const response = await axios(`${COUNTRIES}/${country}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}