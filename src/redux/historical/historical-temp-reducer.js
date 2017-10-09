import ACTION_TYPES from './historical-temp-action'

const initialState = {
    isRetriving: false,
    historical_temp: null
}

export default function HistoricalTempReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_DAILY_TEMP:
            return Object.assign({}, state, {
            isRetriving: true
        });
        case ACTION_TYPES.DAILY_TEMP_FETCHED:
            return Object.assign({}, state, {
            isRetriving: false,
            historical_temp: action.data
        });
        default:
            return state;
    }
}