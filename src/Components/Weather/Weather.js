import React, { Component } from 'react';
import './Weather.css';

const Weather = props => {
  return (
    <div className={`icon color-${props.weatherStatus.toLocaleLowerCase()}`}>
      {props.weatherStatus !== "" ?
        <img src={require(`../../Images/${props.weatherStatus}.svg`)} className={`weather-icon-${props.weatherStatus.toLocaleLowerCase()}`} alt={props.weatherStatus} />
        :
        <img src={require(`../../Images/loading.gif`)} className="loading-icon" alt={props.weatherStatus} />
      }
      <div className="degree">
        {props.weatherDegree}
      </div>
    </div>);
}

export default Weather;
