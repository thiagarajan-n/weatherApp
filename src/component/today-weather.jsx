import React from 'react';
import PropTypes from 'prop-types';
import * as Services from './common/service';
import WeatherTile from './weather-widget';
import CitySelector from './common/city-selector';

class TodayWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            citySelected : 4726206,
            tempData: []
        }
        this.setCity = this.setCity.bind(this);
    }

    componentDidMount() {
        //this.props.dispatch(getDailyTemp(this.state.citySelected));
        (Services.getTodaysTemp(this.state.citySelected)).then(
            response => {
                this.setState({tempData : [response.data]});
            }
        )
    }

    setCity(value) {
        (Services.getTodaysTemp(value)).then(
            response => {
                this.setState(
                    {
                        tempData : [response.data],
                        citySelected: value
                });
            }
        )
    }
    render() {
        this.state.tempData
        return (
            <div className="flex-container">
                <h2>Today's temperature</h2>
                <CitySelector setCityCallback={this.setCity}/>
                <WeatherTile tempData={this.state.tempData} />
            </div>
        );
    }
};

TodayWeather.propTypes = {
    tempData: PropTypes.object
};

/*const mapStateToProps = (state) => {
   return {
       tempData : state.dailyTemp.daily_temp
   };
} ;*/
export default TodayWeather;