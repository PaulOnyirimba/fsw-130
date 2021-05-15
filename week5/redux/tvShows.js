export function addTvShows(show) {
    return {
        type: "ADD_TV_SHOWS",
        payload: show
    }
}

export function removeTvShow(show) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: show
    }
}

export default function tvShowsReducer(tvShows = [], action) {
    switch(action.type) {
        case "ADD_TV_SHOW":
            return [...tvShows, action.payload]
        case "REMOVE_TV_SHOW": {            
            const updatedArr = tvShows.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return tvShows
    }
}