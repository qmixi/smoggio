import { observable, action, computed } from 'mobx';
import "isomorphic-fetch";
import _ from 'lodash';
import { getHeader } from '../../helpers/utils';

export default class StatsState {
    @observable stats = {};

    constructor(initialState) {
        this.stats = _.get(initialState, 'stats.stats', {});
    }

    @action
    fetchStats(id) {
        return fetch(`https://airapi.airly.eu/v2/measurements/installation?installationId=${id}`, { headers: getHeader() })
            .then(resp => resp.json())
            .catch(e => console.log(e));

    }

    @computed get isDisconnected() {
        const values = _.get(this.stats, 'current.values', []);
        return values.length < 1;
    }


    toJson() {
        return {
            stats: this.stats ? this.stats : {}
        };
    }
}