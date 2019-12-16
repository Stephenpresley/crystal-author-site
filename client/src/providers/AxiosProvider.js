import React, { useState, useEffect } from 'react';
import axios from 'axios'
export const AxiosContext = React.createContext()

export default function AxiosProvider(props) {
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])
    const [user, setUser] = useState({})
    const getTopics = () => {
        axios.get('/topics').then(res => {
            setTopics(() => [...res.data])
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
            setArticles(() => [...res.data].reverse())
        })
            .catch(err => {
                console.error(err)
            })
    }

    const getArticlesByTopic = (topicId) => {
        axios.get(`/articles/${topicId}`).then(res => {
            setArticles(() => [...res.data])
        })
        .catch(err => {
            console.error(err)
        })
    }

    const login = (user) =>{
        axios.post('/auth/login', user).then(res => {
            console.log('res', res.data)
        })
    }
    return (
        <AxiosContext.Provider
            value={{
                getTopics,
                topics,
                getArticles,
                articles,
                getArticlesByTopic,
                user,
                login
            }}>
            {props.children}
        </AxiosContext.Provider>
    );
};
