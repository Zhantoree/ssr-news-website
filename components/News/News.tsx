import React, {FC} from 'react';
import s from './News.module.scss'
import {DateParser} from "@/helpers/DateParser";
import {Fields} from "@/store/news/news.type";

interface NewsProps {
    id: string,
    webPublicationDate: string,
    webTitle: string,
    fields: Fields | undefined
}

const News: FC<NewsProps> = ({id, webPublicationDate, webTitle, fields}) => {
    let date = DateParser(webPublicationDate)
    let minutes = date.time.minutes < 10 ? `0${date.time.minutes}` : `${date.time.minutes}`
    return (
        <div className={s.news}>
            <div className={s.news__image}>
                <img src={fields?.thumbnail} alt=""/>
            </div>
            <div className={s.news__content}>
                <p className={s.news__date}>{`${date.day} ${date.month} ${date.year}   ${date.time.hours}:${minutes}`}</p>
                <p className={s.news__title}>{webTitle}</p>
            </div>
            <div className={s.news__button}>
                <button>Details</button>
            </div>
        </div>
    );
};

export default News;