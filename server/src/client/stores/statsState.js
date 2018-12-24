import { observable, action } from 'mobx';
import "isomorphic-fetch";
import _ from 'lodash';

export default class StatsState {
    @observable stats = {};

    constructor(initialState) {        
        this.stats = _.get(initialState, 'stats.stats', {});
    }

    @action
    fetchStats(id) {
        return fetch(`https://airapi.airly.eu/v2/measurements/installation?installationId=${id}`, { headers: { apikey: process.env.AIRLY_API_KEY } })
            .then(resp => resp.json())
            .catch(e => console.log(e));

    }

    toJson() {
        return {
            stats: this.stats ? this.stats : {}
        };
    }
}