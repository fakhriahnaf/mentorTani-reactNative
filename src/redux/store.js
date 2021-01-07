import {createStore} from 'redux';
import { useState } from "react/cjs/react.development";

// const [profile, setProfile] = useState('Fakhri');

// setProfile('Ahnaf');

const initialState = {
    loading: false,
    name : 'Fakhri Ahnaf',
    address: 'Bogor',
};

const reducer = (state = initialState, action) => {
    if(action.type ==='SET_LOADING') {
        return {
            ...state,
            loading: action.value,
        }
    }
    return state;
};


const store = createStore(reducer);

export default store;