import React, { Component } from 'react'
import Cardlist from '../components/Cardlist';
import Scrollbar from '../components/Scrollbar';
import SearchBox from '../components/SearchBox';

import './App.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });

        return !robots.length ?
            <h1 className='tc'>Loading...</h1>
            :
            (
                <div className="tc">
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scrollbar>
                        <Cardlist robots={filteredRobots} />
                    </Scrollbar>
                </div>
            );

    }
}

export default App;     