import React, {FC, useEffect, useState} from 'react';
import s from './News.module.scss'
import {DateParser} from "@/helpers/DateParser";
import {Fields} from "@/store/news/news.type";
import Link from "next/link";

interface NewsProps {
    id: string,
    webPublicationDate: string,
    webTitle: string,
    fields: Fields | undefined
}

const News: FC<NewsProps> = ({id, webPublicationDate, webTitle, fields}) => {
    let date = DateParser(webPublicationDate)
    const [isLoading, setIsLoading] = useState(true)
    let link: string = id===undefined ? "" : `/news/${id}/`;
    useEffect(() => {
        id === undefined || fields?.thumbnail===undefined ?
            setIsLoading(true) :
            setIsLoading(false)
    }, [isLoading])
    return (
        <>
            {
                isLoading ?
                    <h1>Loading...</h1>
                    :
                    <div className={s.news}>
                        <div className={s.news__image}>
                            <img src={fields?.thumbnail} alt=""/>
                        </div>
                        <div className={s.news__content}>
                            <p className={s.news__date}>{`${date.day} ${date.month} ${date.year}   ${date.time.hours}:${date.time.minutes}`}</p>
                            <p className={s.news__title}>{webTitle}</p>
                        </div>
                        <div className={s.news__button}>
                            <button>
                                <Link href={`${link}`}>
                                    Details
                                </Link>
                            </button>
                        </div>
                    </div>
            }
        </>



    );
};

export default News;