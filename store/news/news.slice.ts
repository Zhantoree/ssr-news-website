import {Response} from "@/store/news/news.type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchNews} from "@/store/news/ActionCreator";

interface NewsState {
    response: Response;
    isLoading: boolean;
    error: string;
}

const initialState: NewsState = {
    response: {
        results: [],
        currentPage: 1,
        orderBy: "relevance",
        pages: 1,
        pageSize: 20,
        startIndex: 1,
        status: "ok",
        total: 1,
        userTier: "developer"
    },
    isLoading: true,
    error: ''
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action: PayloadAction<Response>) => {
                state.response = action.payload
                state.isLoading = false;
                state.error = '';
            })
    }
})

export default newsSlice.reducer;