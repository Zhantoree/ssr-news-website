import {UrlObject} from "url";

export interface IResponse{
    response: Response
}

export interface Response {
    status: string
    userTier: string
    total: number
    startIndex: number
    pageSize: number
    currentPage: number
    pages: number
    orderBy: string
    results: INews[]
}

export interface INews {
    id: string
    type: string
    sectionId: string
    sectionName: string
    webPublicationDate: string
    webTitle: string
    webUrl: string
    apiUrl: string
    fields: Fields
    isHosted: boolean
    pillarId: string
    pillarName: string
}

export interface Fields {
    thumbnail: string
}

export enum PageSize{
    default = 12,
    medium = 24,
    large = 36
}

export enum PageSort{
    relevance = "relevance",
    newest = "newest",
    oldest = "oldest"
}

