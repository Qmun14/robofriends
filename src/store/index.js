import { createStore } from 'redux';

const initialState = {
    robots: [],
    searchField: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROBOTS':
            return { ...state, robots: action.payload };
        case 'SET_SEARCH_FIELD':
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
};

const store = createStore(searchReducer);

export default store;