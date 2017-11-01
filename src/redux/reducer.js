import axios from 'axios';

const initialState = {
    allMakes: []
}

const GET_ALL_MAKES = 'GET_ALL_MAKES';

export function getAllMakes() {
    const allMakes = axios.get('/api/makes').then(res => res)
    return {
        type: GET_ALL_MAKES,
        payload: allMakes
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MAKES + '_PENDING':
            return state;
        case GET_ALL_MAKES + '_FULFILLED':
            return Object.assign({}, state, { allMakes: action.payload.data });
        case GET_ALL_MAKES + '_REJECTED':
            return state;
        default:
            return state;
    }
}

