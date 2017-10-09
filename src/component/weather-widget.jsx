import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

class WeatherTile extends React.Component {

    historicalTemp(data) {
        return data.map( (data, index)=> {
            const {date, temp_max, temp_min} = data;
            const todayDate = Moment(date).format('YYYY/MM/DD');

            return (
                <tr key={index}>
                    <td>{todayDate}</td>
                    <td>{temp_max}</td>
                    <td>{temp_min}</td>
                </tr>
            );
        });

    }
    render() {
        if(this.props.tempData && this.props.tempData.length >0 ) {
            const disableDate = this.props.disableDate ? `disableDate` : '';
            return (
                <div className="table-flex">
                    <table className="table-responsive">
                        <tr>
                            <th className={disableDate}>Date</th>
                            <th>Max Temp <sub>(F)</sub></th>
                            <th>Min Temp <sub>(F)</sub></th>
                        </tr>
                        {this.historicalTemp(this.props.tempData)}

                    </table>

                </div>
            );
        } else {
            return (
                <div className="table-flex">
                    <h3>Please wait while we load the data</h3>
                </div>
            );
        }
    };
}

WeatherTile.PropTypes = {
    disableDate: PropTypes.bool,
    tempData: PropTypes.object
};


export default WeatherTile;