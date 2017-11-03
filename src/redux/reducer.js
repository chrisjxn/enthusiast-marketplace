import axios from 'axios';

const initialState = {
    allMakes: [],
    selectedMakes: [],
    allLinesFromSelectedMakes: []
}

const GET_ALL_MAKES = 'GET_ALL_MAKES';
const SELECT_MAKES = 'SELECT_MAKES';
const GET_ALL_LINES_FROM_SELECTED_MAKES = 'GET_ALL_LINES_FROM_SELECTED_MAKES';

export function getAllMakes() {
    const allMakes = axios.get('/api/makes').then(res => res)
    return {
        type: GET_ALL_MAKES,
        payload: allMakes
    }
}

export function selectMakes(make) {
    return {
        type: SELECT_MAKES,
        payload: make
    }
}

export function getAllLinesFromSelectedMakes() {
    const allLinesFromSelectedMakes = axios.get('/api/lines').then(res => res)
    return {
        type: GET_ALL_LINES_FROM_SELECTED_MAKES,
        payload: allLinesFromSelectedMakes
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
        case SELECT_MAKES:
            let updatedMakesArr = [];
            if (state.selectedMakes.includes(action.payload)) {
                updatedMakesArr = state.selectedMakes.filter(make => {
                    return make !== action.payload
                })
            } else {
                updatedMakesArr = [...state.selectedMakes, action.payload]
            }
            return Object.assign({}, state, { selectedMakes: updatedMakesArr });
        case GET_ALL_LINES_FROM_SELECTED_MAKES + '_PENDING':
            return state;
        case GET_ALL_LINES_FROM_SELECTED_MAKES + '_FULFILLED':
            return Object.assign({}, state, { allLinesFromSelectedMakes: action.payload.data });
        case GET_ALL_LINES_FROM_SELECTED_MAKES + '_REJECTED':
            return state;
        default:
            return state;
    }
}

