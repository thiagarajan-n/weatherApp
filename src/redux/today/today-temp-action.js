import * as Services from '../../component/common/service';

const ACTION_TYPE ={
    GET_DAILY_TEMP : 'GET_DAILY_TEMP',
    DAILY_TEMP_FETCHED : 'DAILY_TEMP_FETCHED',
    DAILY_TEMP_FAILED : 'DAILY_TEMP_FAILED'
};
const gettingTemp = () => {
    return {type: ACTION_TYPE.GET_DAILY_TEMP};

};

/*const getTemp = (cityId) => {
    return (dispatch) => {
      dispatch(gettingTemp());

      return Services.getTodaysTemp(cityId);
    };
};*/

const setTemp = (data) => {
    return {
        type: ACTION_TYPE.DAILY_TEMP_FETCHED,
        data
    };
};

/*const getDailyTemp = (cityId) => {
    return dispatch(getTemp(cityId)).then(
        response => {
            return dispatch(setTemp(response.data));
        }
    );
};*/

const getDailyTemp = (cityId) => {
    const response = Services.getTodaysTemp(cityId);

    return {
        type: ACTION_TYPE.DAILY_TEMP_FETCHED,
        response
    };
};

export default {ACTION_TYPE, getDailyTemp};