import React, { useEffect, useContext } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import ArticleCard from '../components/ArticleCard'
import Topics from '../components/Topics'

export default function Topic (props) {
    const { articles, getArticlesByTopic } = useContext(AxiosContext)
    console.log('props', props)
    useEffect(() => {
        getArticlesByTopic(props.match.params._id)
    }, [])
    const mappedArticles = articles.map(article => <ArticleCard title={article.title}
    created={article.created}
    body={article.body}/>)
    return (
        <div>
            {mappedArticles}
            <Topics />
        </div>
    );
};

