import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const AxiosContext = React.createContext()

export default function AxiosProvider(props) {
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])

    const getTopics = () => {
        axios.get('/topics').then(res => {
            setTopics(prev => [...prev, ...res.data])
        })
            .catch((err) => {
                console.error(err)
            })
    }
    useEffect(() => {
        getTopics()
    }, [])

    const getArticles = () => {
        axios.get('/articles').then(res => {
            setArticles(prev => [...prev, ...res.data])
        })
            .catch(err => {
                console.error(err)
            })
    }
    useEffect(() => {
        getArticles()
    }, [])

    const getArticlesByTopic = (topicId) => {
        axios.get(`/articles/${topicId}`).then(res => {
            setArticles(() => [...res.data])
        })
    }

    return (
        <AxiosContext.Provider
            value={{
                getTopics,
                topics,
                getArticles,
                articles,
                getArticlesByTopic
            }}>
            {props.children}
        </AxiosContext.Provider>
    );
};
