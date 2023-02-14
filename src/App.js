import React, { Component } from 'react'
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';

import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots} />
            </div>
        );
    }
}

export default App;     