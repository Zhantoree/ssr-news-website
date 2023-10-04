import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResponse} from "@/store/news/news.type";

const apiKey = `api-key=cb096783-73d0-44c9-8d3e-1330bea747ce`;

export const newsApi = createApi({
    reducerPath: 'api/news',
    baseQuery: fetchBaseQuery({baseUrl: 'https://content.guardianapis.com/'}),
    endpoints: (build) => ({
        getNews: build.query<IResponse, number>({
            query: (limit: number=20, type:string="relevant", page:number=1) => (
                (type==="relevant") ?
                {
                url: `search?order-by=relevance&page-size=${limit}&page=${page}&show-fields=thumbnail&${apiKey}`
            } : (type==="newest") ?
                    {
                        url: `search?order-by=newest&page-size=${limit}&page=${page}&show-fields=thumbnail&${apiKey}`
                    }
                    :
                    {
                        url: `search?order-by=oldest&page-size=${limit}&page=${page}&show-fields=thumbnail&${apiKey}`
                    }
            )
        }),
        getNewsByTag: build.query<string, string>({
            query: (word: string) => ({
                url: `tag=${word}&${apiKey}`
            })
        })
    }),
})

export const {useGetNewsQuery} = newsApi