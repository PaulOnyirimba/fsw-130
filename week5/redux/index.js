const redux = require("redux")
const {combineReducers, createStore} = redux
import countReducer from "./count"
import moviesReducer from "./movies"
import tvShowsReducer from "./tvShows"

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: moviesReducer,
    youTubeVideo: tvShowsReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store