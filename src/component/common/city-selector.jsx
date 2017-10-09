import React from 'react';
import PropTypes from 'prop-types';

class CitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedSA : true
        }
        this.handleRadioClick = this.handleRadioClick.bind(this);
    }
    handleRadioClick(event) {
        this.setState({
            selectedSA:!this.state.selectedSA
        });
        this.props.setCityCallback(event.target.value);

    }
    render() {
        return (
            <div className="Fancybu">
                <h4>Choose a City to see its temperature</h4>
                <label>
                    <input type="radio" value="4726206" checked={this.state.selectedSA} onClick={this.handleRadioClick}/>
                    San Antonio
                </label>
                <label>
                    <input type="radio" value="4671654" checked={!this.state.selectedSA} onClick={this.handleRadioClick}/>
                    Austin
                </label>
            </div>
        );
    }
};

CitySelector.propTypes = {
    setCityCallback: PropTypes.f
};
export default CitySelector;