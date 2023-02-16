import React, { useState, useEffect } from 'react'
import Cardlist from '../components/Cardlist';
import Scrollbar from '../components/Scrollbar';
import SearchBox from '../components/SearchBox';

import './App.css'


const App = (props) => {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(count);
    }, [count]);      //useEffect Hook akan dijalankan ketika ada dependencies yg berubah tiap kali aplikasi di mount ulang

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
                    <button onClick={() => setCount(count + 1)}>Click ME!</button>
                    <SearchBox searchChange={onSearchChange} />
                    <Scrollbar>
                        <Cardlist robots={filteredRobots} />
                    </Scrollbar>
                </div>
            );

    }
}

export default App;     