import { combineReducers } from "redux"
import api from '../utils/api'

const name = (state = null, action) => {
    switch (action.type) {
        case "SET_TREE_NAME":
            return action.payload
        case "CLEAR_TREE_NAME":
            return null
        default:
            return state
    }
}

const modulesInitialState = {
    collection: null,
    isLoading: false
}

export const fetchModules = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MODULES' })

        api
            .get('/modules/')
            .then(response => {
                let result = response.data.data
                dispatch({ type: 'SET_MODULES', payload: result })
            })
    }
}

const modules = (state = modulesInitialState, action) => {
    switch (action.type) {
        case "FETCH_MODULES":
            return { ...state, isLoading: true }
        case "SET_MODULES":
            return { ...state, collection: action.payload, isLoading: false }
        case "CLEAR_MODULES":
            return modulesInitialState
        default:
            return state
    }
}

const treeReducer = combineReducers({
    modules,
    name,
});

export default treeReducer
