export function addMovies(movie) {
    return {
        type: "ADD_MOVIES",
        payload: movie
    }
}

export function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIES",
        payload: movie
    }
}

export default function moviesReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIES":
            return [...movies, action.payload]
        case "REMOVE_MOVIES": {            
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return movies
    }
}