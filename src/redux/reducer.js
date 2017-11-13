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
    activeListing: [],
    trims: [],
    engines: [],
    transmissions: [],
    colors: [],
    interiors: [],
    packages: [],
    options: [],
    selectedColors: [],
    configListings: [],
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
const GET_TRIMS = 'GET_TRIMS';
const GET_ENGINES = 'GET_ENGINES';
const GET_TRANSMISSIONS = 'GET_TRANSMISSIONS';
const GET_COLORS = 'GET_COLORS';
const GET_INTERIORS = 'GET_INTERIORS';
const GET_PACKAGES = 'GET_PACKAGES';
const GET_OPTIONS = 'GET_OPTIONS';
const SELECT_COLORS = 'SELECT_COLORS';
const GET_CONFIG_LISTINGS = 'GET_CONFIG_LISTINGS';

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

export function getTrims(yearId) {
    const trims = axios.get(`/api/trims/${yearId}`).then(res => res)
    return {
        type: GET_TRIMS,
        payload: trims
    }
}

export function getEngines(yearId) {
    const engines = axios.get(`/api/engines/${yearId}`).then(res => res)
    return {
        type: GET_ENGINES,
        payload: engines
    }
}

export function getTransmissions(yearId) {
    const transmissions = axios.get(`/api/transmissions/${yearId}`).then(res => res)
    return {
        type: GET_TRANSMISSIONS,
        payload: transmissions
    }
}

export function getColors(yearId) {
    const colors = axios.get(`/api/colors/${yearId}`).then(res => res)
    return {
        type: GET_COLORS,
        payload: colors
    }
}

export function getInteriors(yearId) {
    const interiors = axios.get(`/api/interiors/${yearId}`).then(res => res)
    return {
        type: GET_INTERIORS,
        payload: interiors
    }
}

export function getPackages(yearId) {
    const packages = axios.get(`/api/packages/${yearId}`).then(res => res)
    return {
        type: GET_PACKAGES,
        payload: packages
    }
}

export function getOptions(yearId) {
    const options = axios.get(`/api/options/${yearId}`).then(res => res)
    return {
        type: GET_OPTIONS,
        payload: options
    }
}

export function selectColors(color) {
    return {
        type: SELECT_COLORS,
        payload: color
    }
}

export function getConfigListings(colorId) {
    const configListings = axios.get(`/api/configlistings/${colorId}`).then(res => res)
    return {
        type: GET_CONFIG_LISTINGS,
        payload: configListings
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

        case GET_TRIMS + '_PENDING':
            return state;
        case GET_TRIMS + '_FULFILLED':
            return Object.assign({}, state, { trims: action.payload.data });
        case GET_TRIMS + '_REJECTED':
            return state;

        case GET_ENGINES + '_PENDING':
            return state;
        case GET_ENGINES + '_FULFILLED':
            return Object.assign({}, state, { engines: action.payload.data });
        case GET_ENGINES + '_REJECTED':
            return state;

        case GET_TRANSMISSIONS + '_PENDING':
            return state;
        case GET_TRANSMISSIONS + '_FULFILLED':
            return Object.assign({}, state, { transmissions: action.payload.data });
        case GET_TRANSMISSIONS + '_REJECTED':
            return state;

        case GET_COLORS + '_PENDING':
            return state;
        case GET_COLORS + '_FULFILLED':
            return Object.assign({}, state, { colors: action.payload.data });
        case GET_COLORS + '_REJECTED':
            return state;

        case GET_INTERIORS + '_PENDING':
            return state;
        case GET_INTERIORS + '_FULFILLED':
            return Object.assign({}, state, { interiors: action.payload.data });
        case GET_INTERIORS + '_REJECTED':
            return state;

        case GET_PACKAGES + '_PENDING':
            return state;
        case GET_PACKAGES + '_FULFILLED':
            return Object.assign({}, state, { packages: action.payload.data });
        case GET_PACKAGES + '_REJECTED':
            return state;

        case GET_OPTIONS + '_PENDING':
            return state;
        case GET_OPTIONS + '_FULFILLED':
            return Object.assign({}, state, { options: action.payload.data });
        case GET_OPTIONS + '_REJECTED':
            return state;

        case SELECT_COLORS:
            let updatedColorsArr = [];
            if (state.selectedColors.includes(action.payload)) {
                updatedColorsArr = state.selectedColors.filter(color => {
                    return color !== action.payload
                })
            } else {
                updatedColorsArr = [...state.selectedColors, action.payload]
            }
            return Object.assign({}, state, { selectedColors: updatedColorsArr });

        case GET_CONFIG_LISTINGS + '_PENDING':
            return state;
        case GET_CONFIG_LISTINGS + '_FULFILLED':
            return Object.assign({}, state, { configListings: action.payload.data });
        case GET_CONFIG_LISTINGS + '_REJECTED':
            return state;

        default:
            return state;
    }
}

