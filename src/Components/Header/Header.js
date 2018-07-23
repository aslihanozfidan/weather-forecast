import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className={`app-header color-${this.props.weatherStatus.toLocaleLowerCase()}`}>
                {this.props.weatherLocation}
            </header>
        );
    }
}

export default Header;