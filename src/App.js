import React, { Component } from 'react'
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';


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
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Cardlist robots={filteredRobots} />
                </div>
            );
        }
    }
}

export default App;     