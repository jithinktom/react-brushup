import React from 'react';
import Header from './components/header';
import {Content} from './components/Content';
import { ThemeContext, themes } from './constants/constants';
import './App.css';
import './css/common.css';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: themes.dark
    }
  }

  toggleTheme = () => {
    this.setState({
      selectedTheme: this.state.selectedTheme === themes.dark ? themes.light : themes.dark
    })
  }

  render() {
    return (
      <div className="App" >
        <ThemeContext.Provider value={this.state.selectedTheme}>
          <Header toggleTheme={this.toggleTheme} ></Header>
          <ErrorBoundary>
            <Content />
          </ErrorBoundary>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;
