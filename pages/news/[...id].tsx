import {fetchOneNews} from "@/store/news/ActionCreator";
import {INewsSingle} from "@/store/news/news.type";
import {GetServerSideProps} from "next";
import {useEffect, useState} from "react";
import s from './news.module.scss'

import {DateParser} from "@/helpers/DateParser";
import Link from "next/link";

export const getServerSideProps = (async (context) => {
    // @ts-ignore
    let id = (Object.values(context.params!.id)).join('/')

    const news = await fetchOneNews({id: id})
    return {
        props: {...news}
    }
}) satisfies GetServerSideProps
export default function (news: INewsSingle) {
    const [isLoading, setIsLoading] = useState(true)
    const date = DateParser(news.webPublicationDate)
    useEffect(() => {
        news.id === undefined && news.fields?.headline ?
            setIsLoading(true) :
            setIsLoading(false)
    }, [news.id])
    const getMarkup = (markup: string) => {
        return {__html: markup}
    }

    return <>
        {
            isLoading ?
                <h1>Loading</h1>
                :
                <div className={s.news}>
                    <div className={s.container}>
                        <header>
                            <div className={s.header__title}>
                                <div className={s.header__button}>
                                    <Link href='/'>
                                        <button>
                                            Go back
                                        </button>
                                    </Link>


                                </div>
                                <h1 dangerouslySetInnerHTML={getMarkup(news.fields?.headline)}></h1>
                            </div>
                            <div className={s.header__content}>
                                <p className={s.header__time}>{`${date.day} ${date.month} ${date.year} ${date.time.hours}:${date.time.minutes}`}</p>
                                <Link href={`${news.webUrl}`} className={s.header__link}>read on Guardian</Link>
                            </div>
                        </header>
                        <main>
                            <div className={s.main__image}>
                                <img src={news.fields?.thumbnail} alt=""/>
                            </div>
                            <div className={s.main__content}>
                                <div className={s.main__title}
                                     dangerouslySetInnerHTML={getMarkup(news.fields?.trailText)}
                                ></div>
                                <div className={s.main__body}
                                     dangerouslySetInnerHTML={getMarkup(news.fields?.body)}
                                ></div>
                            </div>
                        </main>
                    </div>
                </div>
        }
    </>
}

