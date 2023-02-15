import React, { useState, useEffect } from 'react'
import Cardlist from '../components/Cardlist';
import Scrollbar from '../components/Scrollbar';
import SearchBox from '../components/SearchBox';

import './App.css'


const App = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    }

    {
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
                    <SearchBox searchChange={onSearchChange} />
                    <Scrollbar>
                        <Cardlist robots={filteredRobots} />
                    </Scrollbar>
                </div>
            );

    }
}

export default App;     