import React from 'react';
import ThemeChanger from './ThemeChanger';
import '../css/common.css';
import { ThemeContext } from '../constants/constants';

class Header extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>{
                value => (
                    <div className="header" style={value}>
                        <h2>React brush up</h2>
                        <ThemeChanger {...this.props}></ThemeChanger>
                    </div>
                )
            }
            </ThemeContext.Consumer>
        )
    }
}

export default Header;