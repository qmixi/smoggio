export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'SET_FORECAST':
            return {
                type: 'forecast',
                title: 'Forecast'
            }
        case 'SET_HISTORY':
            return {
                type: 'history',
                title: 'Historical'
            }
        default:
            return state
    }
};