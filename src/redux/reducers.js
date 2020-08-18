import { combineReducers } from 'redux'

const auth = (state = { isAuthenticated: false }, { type, payload }) => {
	switch (type) {
		case 'SIGN_IN':
			return { ...state, isAuthenticated: true }
		case 'SIGN_OUT':
			return { ...state, isAuthenticated: false }
		default:
			return state
	}
}

const workouts = (state = [], { type, payload }) => {
	switch (type) {
		case 'ADD_WORKOUT':
			return [...state, { ...payload }]
		default:
			return state
	}
}

const exercises = (state = [], { type, payload }) => {
	switch (type) {
		case 'ADD_EXERCISE':
			return [...state, { ...payload }]
		default:
			return state
	}
}

const reducer = combineReducers({ auth, exercises, workouts })
export default reducer
