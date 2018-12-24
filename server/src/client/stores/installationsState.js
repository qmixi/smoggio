import { observable, action } from 'mobx';
import "isomorphic-fetch";
import _ from 'lodash';

export default class InstallationsState {
    @observable installations = [];

    constructor(initialState) {
        this.installations = _.get(initialState, 'installations.installations', []);
    }

    @action
    fetchInstalations(lat, lng) {
        return fetch(`https://airapi.airly.eu/v2/installations/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=5&maxResults=3`, { headers: { apikey: process.env.AIRLY_API_KEY } })
            .then(resp => resp.json())
            .catch(e => console.log(e));

    }

    @action
    fetchGeocodingData(address) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEOCODING_API_KEY}`)
            .then(resp => resp.json())
            .catch(e => console.log(e));
    }

    toJson() {
        return {
            installations: this.installations ? this.installations : []
        };
    }
}