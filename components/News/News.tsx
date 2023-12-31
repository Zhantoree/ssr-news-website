import React, {FC, useEffect, useState} from 'react';
import s from './News.module.scss'
import {DateParser} from "@/helpers/DateParser";
import {Fields} from "@/store/news/news.type";
import Link from "next/link";

interface NewsProps {
    id: string,
    webPublicationDate: string,
    webTitle: string,
    fields: Fields
}

const News: FC<NewsProps> = ({id, webPublicationDate, webTitle, fields}) => {
    let date = DateParser(webPublicationDate)

    const [isLoading, setIsLoading] = useState(true)
    let link: string = id === undefined ? "" : `/news/${id}/`;
    useEffect(() => {
        id === undefined || fields?.thumbnail === undefined ?
            setIsLoading(true) :
            setIsLoading(false)
    }, [isLoading])
    return (
        <>
            <div className={s.news}>
                <div className={s.news__image}>
                    <img src={fields?.thumbnail} alt={webTitle}/>
                </div>
                <div className={s.news__content}>
                    <p className={s.news__date}>{`${date.day} ${date.month} ${date.year}   ${date.time.hours}:${date.time.minutes}`}</p>
                    <p className={s.news__title}>{webTitle}</p>
                </div>
                <div className={s.news__button}>

                    <Link href={`${link}`}>
                        <button>
                            Details
                        </button>

                    </Link>
                </div>
            </div>
        </>


    );
};

export default News;