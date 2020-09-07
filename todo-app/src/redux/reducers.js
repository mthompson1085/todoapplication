import {FILTER_ALL} from './actionTypes'
import { ADD_TODO, DELETE_TODO,TOGGLE_TODO, SET_FILTER } from './actionTypes'

const initialTodoState = {
    nextId: 3,
    data:
    {
        1: {
            content: 'Gather Tax Documents',
            completed: false
        },
        2: {
            content: 'Apply For FSA ID',
            completed: false
        }
    }
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case DELETE_TODO: {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId -1
                }
            )
        }
        case TOGGLE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }
    

        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}

