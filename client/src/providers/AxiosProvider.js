import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
export const AxiosContext = React.createContext();
const interceptAxios = axios.create();

interceptAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AxiosProvider = (props) => {
    const [topics, setTopics] = useState([]);
    const [articles, setArticles] = useState([]);
    const [oneArticle, setOneArticle] = useState({})
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || {});
    const [token, setToken] = useState(
        localStorage.getItem('token') || '');
    const [topicTitle, setTopicTitle] = useState({})
    const [newArticle, setNewArticle] = useState({})
    const [redirect, setRedirect] = useState(false)

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

    const getOneArticle = (_id) => {
        axios.get(`/articles/oneArticle/${_id}`).then(res => {
            setOneArticle(res.data)
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

    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        return {
            value,
            setValue,
            reset: () => setValue(''),
            bind: {
                value,
                onChange: e => {
                    setValue(e.target.value);
                }
            }
        };
    };

    const login = (user, password) => {
        const cred = { username: user, password }
        return interceptAxios
            .post('/auth/login', cred).then(res => {
                const { token, user } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUser(user)
                setToken(token)
                return res
            })
            .catch(err => {
                console.error(err)
            })
    }

    const logout = async () => {
        await localStorage.removeItem('user');
        await localStorage.removeItem('token');
        await setUser({ user: {} })
        await setToken({ token: '' })
        props.history.push('/')

    }

    const addTopic = (title) => {
        const topicTitle = { title };
        return interceptAxios
            .post('/topics', topicTitle).then(res => {
                const { title } = res.data
                setTopicTitle({ title })
            })
            .catch(err => {
                console.error(err)
            })
    }

    const addArticle = (topicId, title, body) => {
        const newArticle = { title, body }
        return interceptAxios
            .post(`/articles/${topicId}`, newArticle).then(res => {
                const { title, body } = res.data
                setNewArticle({ title, body });
                setRedirect(true);
            })
            .catch(err => {
                console.error(err)
            })
    }

    const deleteArticle = (articleId) =>{
        return interceptAxios
            .delete(`/articles/oneArticle/${articleId}`).then(res =>{
                getArticles();
                setRedirect(true);
            })
            .catch(err => {
                console.error(err)
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
                login,
                token,
                useInput,
                logout,
                topicTitle,
                addTopic,
                newArticle,
                addArticle,
                oneArticle,
                getOneArticle,
                deleteArticle,
                redirect
            }}>
            {props.children}
        </AxiosContext.Provider>
    );
};

export default withRouter(AxiosProvider);