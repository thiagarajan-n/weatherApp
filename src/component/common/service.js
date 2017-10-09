import axios from 'axios';

export function getTodaysTemp(cityId){
    return axios.get('http://localhost:8080/temperature/get',{
        params: {
            id:cityId
        }
    });
}

export function getHistoricalTemp(cityId){
    return axios.get('http://localhost:8080/temperature/getAll',{
        params: {
            id:cityId
        }
    });
}

