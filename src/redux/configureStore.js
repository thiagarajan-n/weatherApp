import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import dailyTempReducer from './today/today-temp-reducer';
import historyTempReducer from './historical/historical-temp-reducer';

export default function configureStore(initialState) {


    return createStore({
        initialState,
        middleware: applyMiddleware(promise),
        reducers: {
            dailyTemp: dailyTempReducer,
            historyTemp : historyTempReducer
        }
    })

}
