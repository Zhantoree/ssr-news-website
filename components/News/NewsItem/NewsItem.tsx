import {FC} from 'react';
import './NewsItem.module.scss'

interface NewsItemProps {
    id: string
    headline: string,
    main: string,
    body: string
}


const NewsItem: FC<NewsItemProps> = () => {
    return (
        <>

        </>
    );
};

export default NewsItem;