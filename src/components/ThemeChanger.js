import React from 'react';

class ThemeChanger extends React.Component {

    render() {
        console.log(this.props)
        return (
            <button onClick={e => this.props.toggleTheme()}>Change theme</button>
        )
    }
}

export default ThemeChanger;