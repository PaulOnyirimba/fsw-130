const redux = require("redux")

function addName(name) {
    return {
        type: "ADD_Name",
        payload: name
    }
}

function addPhoneNumber(number) {
    return {
        type: "ADD_PHONE_NUMBER",
        payload: number
    }
}

function removePhoneNumber(number) {
    return {
        type: "REMOVE_PHONE_NUMBER",
        payload: number
    }
}

const initialState = {
    names: [],
    phoneNumbers: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_Name":
            return {
                ...state,
                names: state.names + action.payload
            }
        case "ADD_PHONE_NUMBER":
            return {
                ...state,
                phoneNumbers: [...state.phoneNumbers, action.payload]
            }
        case "REMOVE_PHONE_NUMBER":
            const arrCopy = [...state.phoneNumbers]
            
            const updatedArr = state.phoneNumbers.filter(number => number.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                phoneNumbers: updatedArr
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addPhoneNumber("770555555"))
store.dispatch(addPhoneNumber("7709875559"))


store.dispatch(removeFavoriteThing("770555555"))