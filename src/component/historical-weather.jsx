import React from 'react'
import PropTypes from 'prop-types';
import CitySelector from './common/city-selector';
import * as Services from './common/service';
import WeatherTile from './weather-widget';

class HistoricalWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            citySelected : 4726206,
            tempData: null
        }

        this.setCity = this.setCity.bind(this);
    }

    componentDidMount() {
        //this.props.dispatch(getDailyTemp(this.state.citySelected));
        (Services.getHistoricalTemp(this.state.citySelected)).then(
            response => {
                this.setState({tempData : response.data});
            }
        )
    }

    setCity(value) {
        this.setState({
            citySelected: value
        });
        (Services.getHistoricalTemp(value)).then(
            response => {
                this.setState({tempData : response.data});
            }
        );
    }

    render() {
        return (
            <div className="flex-container">
                <h2>Historical temperature</h2>
                <CitySelector setCityCallback={this.setCity}/>
                <WeatherTile tempData={this.state.tempData} />
            </div>
        );
    }
};

export default HistoricalWeather;