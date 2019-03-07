import StatsState from './statsState';
import { stats } from '../../helpers/mocks';

const initialState = {
    stats: {
        stats
    }
}

describe('statsState', () => {

    it('sets proper initial value', () => {
        const store = new StatsState(initialState);

        expect(store.stats.current.indexes[0].value).toEqual(12.07)
    });

    it('sets stats properly', () => {
        const store = new StatsState();
        store.setStats(stats);

        expect(store.stats.current.indexes[0].value).toEqual(12.07)
        expect(store.stats.current.values.length).toEqual(6)
    });

    it('sets isDisconnected flag as true when the current values are empty', () => {
        const store = new StatsState();

        expect(store.isDisconnected).toEqual(true);

    });

    it('sets isDisconnected flag as false when the current values exists', () => {
        const store = new StatsState();

        expect(store.isDisconnected).toEqual(true);
        store.setStats(stats);
        expect(store.isDisconnected).toEqual(false);
    });

    it('returns state object correctly', () => {
        const store = new StatsState();
        store.setStats(stats);

        const state = store.toJson();
        expect(state.stats.current.indexes[0].value).toEqual(12.07)
        expect(state.stats.current.values.length).toEqual(6)
    });
});