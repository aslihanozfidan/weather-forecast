import React, { Component } from 'react';
import './Icon.css';

class Icon extends Component {
  render() {
    return (
      <div className={`icon color-${this.props.weatherStatus.toLocaleLowerCase()}`}>
        {this.props.weatherStatus !== "" ?
          <img src={require(`../../Images/${this.props.weatherStatus}.svg`)} className="weather-icon" alt={this.props.weatherStatus} />
          :
          <img src={require(`../../Images/loading.gif`)} className="loading-icon" alt={this.props.weatherStatus} />
        }
        <div className="degree">
          {this.props.weatherDegree}
        </div>
      </div>
    );
  }
}

export default Icon;
