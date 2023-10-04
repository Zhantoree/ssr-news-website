import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const apiKey = 'api-key=cb096783-73d0-44c9-8d3e-1330bea747ce'
interface IFetchNewsRequest {
    pageLimit: number,
    pageSort: string,
    searchTag: string
}

const initialRequest: IFetchNewsRequest = {
    pageLimit: 8,
    pageSort: "newest",
    searchTag: ""
}

export const fetchNews = createAsyncThunk(
    'news/fetchAll',
    async (request: IFetchNewsRequest = initialRequest, thunkAPI) => {
        try {
            let response;
            if(request.searchTag === "") {
                response = await axios
                    .get(`https://content.guardianapis.com/search?order-by=${request.pageSort}&page-size=${request.pageLimit}&q=${request.searchTag}&show-fields=thumbnail&api-key=cb096783-73d0-44c9-8d3e-1330bea747ce`)
            }
            else {
                response = await axios
                    .get(`https://content.guardianapis.com/search?order-by=${request.pageSort}&page-size=${request.pageLimit}&q=${request.searchTag}&show-fields=thumbnail&api-key=cb096783-73d0-44c9-8d3e-1330bea747ce`)
            }
            return response!.data.response

        } catch (e) {
            thunkAPI.rejectWithValue("Loading news error occurred!")
        }

    }
)





