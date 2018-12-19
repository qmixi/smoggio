import { observable, action } from 'mobx';
import "isomorphic-fetch"

export default class AppState {

    @observable items = [];
    @observable tasks = [];
    @observable installations = [];
    @observable stats = {};

    constructor(initialState = {}) {
        this.items = initialState.appstate && initialState.appstate.items ? initialState.appstate.items : [];
        this.tasks = initialState.appstate && initialState.appstate.tasks ? initialState.appstate.tasks : [];
        this.installations = initialState.appstate && initialState.appstate.installations ? initialState.appstate.installations : [];
        this.stats = initialState.appstate && initialState.appstate.stats ? initialState.appstate.stats : {};
    }

    @action
    fetchTasks(id) {
        return fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(resp => resp.json())
            .catch(e => console.log(e));
    }

    @action
    fetchInstalations() {
        return fetch('https://airapi.airly.eu/v2/installations/nearest?lat=50.062006&lng=19.940984&maxDistanceKM=5&maxResults=3', { headers: { apikey: process.env.AIRLY_API_KEY } })
            .then(resp => resp.json())
            .catch(e => console.log(e));

    }

    @action
    fetchStats(id) {
        return fetch(`https://airapi.airly.eu/v2/measurements/installation?installationId=${id}`, { headers: { apikey: process.env.AIRLY_API_KEY } })
            .then(resp => resp.json())
            .catch(e => console.log(e));

    }

    @action fetchGeocodingData(address) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEOCODING_API_KEY}`)
            .then(resp => resp.json())
            .catch(e => console.log(e));
    }

    @action
    addItem(item) {
        this.items.push(item);
    }

    toJson() {
        return {
            items: this.items,
            tasks: this.tasks && this.tasks.length ? this.tasks : [],
            stats: this.stats ? this.stats : {}
        };
    }
}