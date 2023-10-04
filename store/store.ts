import {combineReducers, configureStore} from "@reduxjs/toolkit";
import news from './news/news.slice'


const rootReducer = combineReducers({
    news: news
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type TypeRootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
