import axios from 'axios';
import { pluck } from 'underscore';

const initialState = {
    allMakes: [],
    selectedMakes: [],
    allLines: [],
    selectedLines: [],
    allGenerations: [],
    selectedGenerations: [],
    allModels: [],
    selectedModels: [],
    allYears: [],
    selectedYears: [],
    allListings: [],
    activeListing: []
}

const GET_ALL_MAKES = 'GET_ALL_MAKES';
const SELECT_MAKES = 'SELECT_MAKES';
const GET_ALL_LINES = 'GET_ALL_LINES';
const SELECT_LINES = 'SELECT_LINES';
const GET_ALL_GENERATIONS = 'GET_ALL_GENERATIONS';
const SELECT_GENERATIONS = 'SELECT_GENERATIONS';
const GET_ALL_MODELS = 'GET_ALL_MODELS';
const SELECT_MODELS = 'SELECT_MODELS';
const GET_ALL_YEARS = 'GET_ALL_YEARS';
const SELECT_YEARS = 'SELECT_YEARS';
const GET_ALL_LISTINGS = 'GET_ALL_LISTINGS';
const GET_ACTIVE_LISTING = 'GET_ACTIVE_LISTING';

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

export function getAllLines() {
    const allLines = axios.get('/api/lines').then(res => res)
    return {
        type: GET_ALL_LINES,
        payload: allLines
    }
}

export function selectLines(line) {
    return {
        type: SELECT_LINES,
        payload: line
    }
}

export function getAllGenerations() {
    const allGenerations = axios.get('/api/generations').then(res => res)
    return {
        type: GET_ALL_GENERATIONS,
        payload: allGenerations
    }
}

export function selectGenerations(generation) {
    return {
        type: SELECT_GENERATIONS,
        payload: generation
    }
}

export function getAllModels() {
    const allModels = axios.get('/api/models').then(res => res)
    return {
        type: GET_ALL_MODELS,
        payload: allModels
    }
}

export function selectModels(modelId, model) {
    return {
        type: SELECT_MODELS,
        payload1: modelId,
        payload2: model
    }
}

export function getAllYears() {
    const allYears = axios.get('/api/years').then(res => res)
    return {
        type: GET_ALL_YEARS,
        payload: allYears
    }
}

export function selectYears(yearId) {
    return {
        type: SELECT_YEARS,
        payload: yearId
    }
}

export function getAllListings() {
    const allListings = axios.get('/api/listings').then(res => res)
    return {
        type: GET_ALL_LISTINGS,
        payload: allListings
    }
}

export function getActiveListing(listingId) {
    const activeListing = axios.get(`/api/listing/${listingId}`).then(res => res)
    return {
        type: GET_ACTIVE_LISTING,
        payload: activeListing
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
        case GET_ALL_LINES + '_PENDING':
            return state;
        case GET_ALL_LINES + '_FULFILLED':
            let filteredLines = [];
            state.selectedMakes.forEach(make => {
                let linesForSelectedMake = action.payload.data.filter(obj => obj.make === make)
                filteredLines = [...filteredLines, ...linesForSelectedMake]
            })
            return Object.assign({}, state, { allLines: filteredLines });
        case GET_ALL_LINES + '_REJECTED':
            return state;
        case SELECT_LINES:
            let updatedLinesArr = [];
            if (state.selectedLines.includes(action.payload)) {
                updatedLinesArr = state.selectedLines.filter(line => {
                    return line !== action.payload
                })
            } else {
                updatedLinesArr = [...state.selectedLines, action.payload]
            }
            return Object.assign({}, state, { selectedLines: updatedLinesArr });
        case GET_ALL_GENERATIONS + '_PENDING':
            return state;
        case GET_ALL_GENERATIONS + '_FULFILLED':
            let filteredGenerations = [];
            state.selectedLines.forEach(line => {
                let generationsForSelectedLine = action.payload.data.filter(obj => obj.line === line)
                filteredGenerations = [...filteredGenerations, ...generationsForSelectedLine]
            })
            return Object.assign({}, state, { allGenerations: filteredGenerations });
        case GET_ALL_GENERATIONS + '_REJECTED':
            return state;
        case SELECT_GENERATIONS:
            let updatedGenerationsArr = [];
            if (state.selectedGenerations.includes(action.payload)) {
                updatedGenerationsArr = state.selectedGenerations.filter(generation => {
                    return generation !== action.payload
                })
            } else {
                updatedGenerationsArr = [...state.selectedGenerations, action.payload]
            }
            return Object.assign({}, state, { selectedGenerations: updatedGenerationsArr });
        case GET_ALL_MODELS + '_PENDING':
            return state;
        case GET_ALL_MODELS + '_FULFILLED':
            let filteredModels = [];
            state.selectedGenerations.forEach(generation => {
                let modelsForSelectedGeneration = action.payload.data.filter(obj => obj.generation === generation)
                filteredModels = [...filteredModels, ...modelsForSelectedGeneration]
            })
            return Object.assign({}, state, { allModels: filteredModels });
        case GET_ALL_MODELS + '_REJECTED':
            return state;
        case SELECT_MODELS:
            let updatedModelsArr = [];
            if (pluck(state.selectedModels, 'id').includes(action.payload1)) {
                updatedModelsArr = state.selectedModels.filter(obj => {
                    return obj.id !== action.payload1
                })
            } else {
                updatedModelsArr = [...state.selectedModels, { id: action.payload1, model: action.payload2 }]
            }
            return Object.assign({}, state, { selectedModels: updatedModelsArr });
        case GET_ALL_YEARS + '_PENDING':
            return state;
        case GET_ALL_YEARS + '_FULFILLED':
            let filteredYears = [];
            state.selectedModels.forEach(selectedModelsObj => {
                let yearsForSelectedModel = action.payload.data.filter(obj => obj.model_id === selectedModelsObj.id)
                filteredYears = [...filteredYears, ...yearsForSelectedModel]
            })
            return Object.assign({}, state, { allYears: filteredYears });
        case GET_ALL_YEARS + '_REJECTED':
            return state;
        case SELECT_YEARS:
            let updatedYearsArr = [];
            if (state.selectedYears.includes(action.payload)) {
                updatedYearsArr = state.selectedYears.filter(yearId => {
                    return yearId !== action.payload
                })
            } else {
                updatedYearsArr = [...state.selectedYears, action.payload]
            }
            return Object.assign({}, state, { selectedYears: updatedYearsArr });
        case GET_ALL_LISTINGS + '_PENDING':
            return state;
        case GET_ALL_LISTINGS + '_FULFILLED':
            let filteredListings = [];
            state.selectedYears.forEach(yearId => {
                let listingsForSelectedYear = action.payload.data.filter(obj => obj.year_id === yearId)
                filteredListings = [...filteredListings, ...listingsForSelectedYear]
            })
            return Object.assign({}, state, { allListings: filteredListings });
        case GET_ALL_LISTINGS + '_REJECTED':
            return state;
        case GET_ACTIVE_LISTING + '_PENDING':
            return state;
        case GET_ACTIVE_LISTING + '_FULFILLED':
            return Object.assign({}, state, { activeListing: action.payload.data });
        case GET_ACTIVE_LISTING + '_REJECTED':
            return state;
        default:
            return state;
    }
}

