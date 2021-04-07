import React, { Component } from 'react';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import ResultContainer from './../ResultContainer/ResultContainer';

const names = require('@rstacruz/startup-name-generator');

class App extends Component {
    state = {
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (text) => {
        this.setState({
            headerExpanded: !text,
            suggestedNames: text ? names(text) : [],
        });
    };
    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
