import { observable, action } from 'mobx';
import "isomorphic-fetch";
import _ from 'lodash';

import { getHeader } from '../../helpers/utils'

export default class InstallationsState {
    @observable installations = [];
    @observable installation = [];
    @observable favs = [];
    @observable isLoading = false;

    constructor(initialState) {
        this.installations = _.get(initialState, 'installations.installations', []);
        this.installation = _.get(initialState, 'installations.installation', {});
        this.favs = _.get(initialState, 'installations.favs', []);
    }
    
    @action
    fetchInstallations(lat, lng) {
        return fetch(`https://airapi.airly.eu/v2/installations/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=5&maxResults=10`, { headers: getHeader() })
            .then(resp => resp.json())
            .catch(e => console.log(e));

    }

    @action
    fetchInstallation(id) {
        return fetch(`https://airapi.airly.eu/v2/installations/${id}`, { headers: getHeader() })
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
            installations: this.installations ? this.installations : [],
            installation: this.installation ? this.installation : {},
            favs: this.favs ? this.favs : {}
        };
    }
}