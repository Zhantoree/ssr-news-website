import Head from 'next/head'
import s from '../styles/Home.module.scss';
import News from "../components/News/News";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {useEffect, useState} from "react";
import {fetchNews} from "@/store/news/ActionCreator";
import {INews, PageSize, PageSort} from "@/store/news/news.type";
import {TagsParser} from "@/helpers/TagsParser";


export default function Home() {
    const dispatch = useAppDispatch();
    const {response, isLoading, error} = useAppSelector(state => state.news)
    const [pageSize, setPageSize] = useState<PageSize>(PageSize.default)
    const [pageSort, setPageSort] = useState<PageSort>(PageSort.relevance)
    const news = response.results;

    const [render, setRender] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')


    useEffect(() => {
        dispatch(fetchNews({
            pageLimit: pageSize,
            pageSort: pageSort,
            searchTag: TagsParser(input)
        }))
    }, [dispatch])


    useEffect(() => {
        dispatch(fetchNews({
            pageLimit: pageSize,
            pageSort: pageSort,
            searchTag: input
        }))
    }, [pageSize, pageSort, render])

    const handlePageSortChange = (value: string) => {
        value === "relevance" ?
            setPageSort(PageSort.relevance)
            :
            value === "newest" ?
                setPageSort(PageSort.newest)
                :
                setPageSort(PageSort.oldest)
    }

    const handlePageSizeChange = (value: string) => {
        value === PageSize["default"].toString() ?
            setPageSize(PageSize.default)
            :
            value === PageSize["medium"].toString() ?
                setPageSize(PageSize.medium)
                :
                setPageSize(PageSize.large)
    }

    return (<>
        <Head>
            <title>News</title>
        </Head>

        <header>

            <div className={s.container}>
                <div className={s.header}>
                    <form onSubmit={(e) => e.preventDefault()} className={s.header__search}>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <div className={s.header__button}>
                            <button type="submit" onClick={e => setRender(!render)}>Find</button>
                        </div>
                    </form>
                    <div className={s.header__sort}>
                        <div className={s.header__dropdown_sort}>
                            <label htmlFor="sort">Sort by: </label>
                            <select name="sort" id={s["sort"]} onChange={e => handlePageSortChange(e.target.value)}>
                                <option value={PageSort.relevance}>{PageSort.relevance}</option>
                                <option value={PageSort.newest}>{PageSort.newest}</option>
                                <option value={PageSort.oldest}>{PageSort.oldest}</option>
                            </select>
                        </div>
                        <div className={s.header__dropdown_page}>
                            <label htmlFor="page">Items on page: </label>
                            <select name="page" onChange={e => handlePageSizeChange(e.target.value)}>
                                <option value={PageSize.default}>{PageSize.default}</option>
                                <option value={PageSize.medium}>{PageSize.medium}</option>
                                <option value={PageSize.large}>{PageSize.large}</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </header>

        <main>
            <div className={s.container}>
                <div className={s.news}>
                    {
                        !isLoading
                            ?
                            news.map((item: INews) => {
                                console.log(item)
                                return <div key={item.id} className={s.news__item}>
                                    <News id={item.id} webPublicationDate={item.webPublicationDate}
                                          webTitle={item.webTitle}
                                          fields={item.fields}
                                    />
                                </div>

                            })
                            :
                            <div className={s.news__loading}>...Loading</div>
                    }
                </div>
            </div>
        </main>

        <footer></footer>
    </>);
}