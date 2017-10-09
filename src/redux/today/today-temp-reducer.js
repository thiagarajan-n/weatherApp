import ACTION_TYPES from './today-temp-action';

const initialState = {
    isRetriving: false,
    daily_temp: null
}

export default function DailyTempReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_DAILY_TEMP:
            return Object.assign({}, state, {
            isRetriving: true
        });
        case ACTION_TYPES.DAILY_TEMP_FETCHED:
            return Object.assign({}, state, {
                isRetriving: false,
                daily_temp: action.data
        });
        default:
            return state;
    }
}