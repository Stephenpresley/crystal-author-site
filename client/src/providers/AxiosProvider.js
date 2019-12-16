import React, { useState, useEffect } from 'react';
import axios from 'axios'
export const AxiosContext = React.createContext()
const interceptAxios = axios.create();

interceptAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export default function AxiosProvider(props) {
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
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
        const cred = {username: user, password}
        return interceptAxios
        .post('/auth/login', cred).then(res => {
            const { token, user} = res.data
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
    
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser({user: {}})
        setToken({token: ''})
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
                logout
            }}>
            {props.children}
        </AxiosContext.Provider>
    );
};
