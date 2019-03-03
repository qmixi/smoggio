import statsReducer from './statsReducer';

describe('Stats Reducer', () => {

    describe('default action', () => {

        it('is instance of proper class', () => {
            expect(statsReducer()).toBeInstanceOf(Object);
        });

        it('returns correct value', () => {
            expect(statsReducer()).toEqual({});
        });
    });

    describe('set forecast mode action', () => {
        let action;

        beforeEach(() => {
            action = {
                type: 'SET_FORECAST'
            };
        });

        it('is instance of proper class', () => {
            expect(statsReducer({}, action)).toBeInstanceOf(Object);
        });

        it('contains type property', () => {
            expect(statsReducer({}, action).hasOwnProperty('type')).toBeTruthy();
        });

        it('contains title propery', () => {
            expect(statsReducer({}, action).hasOwnProperty('title')).toBeTruthy();
        });

        it('has proper type value', () => {
            expect(statsReducer({}, action).type).toEqual('forecast');
        });

        it('has proper title property', () => {
            expect(statsReducer({}, action).title).toEqual('Forecast');
        });
    });

    describe('set history mode action', () => {
        let action;

        beforeEach(() => {
            action = {
                type: 'SET_HISTORY'
            };
        });

        it('is instance of proper class', () => {
            expect(statsReducer({}, action)).toBeInstanceOf(Object);
        });

        it('contains type property', () => {
            expect(statsReducer({}, action).hasOwnProperty('type')).toBeTruthy();
        });

        it('contains title propery', () => {
            expect(statsReducer({}, action).hasOwnProperty('title')).toBeTruthy();
        });

        it('has proper type value', () => {
            expect(statsReducer({}, action).type).toEqual('history');
        });

        it('has proper title property', () => {
            expect(statsReducer({}, action).title).toEqual('Historical');
        });
    });
});