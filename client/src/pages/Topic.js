import React, { useEffect, useContext } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import ArticleCard from '../components/ArticleCard';
import Topics from '../components/Topics';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 2,
        margin: 5,
        width: '97%',
        height: '150vh',
        backgroundColor: '#d4d4dc',
    },
}))

export default function Topic(props) {
    const classes = useStyles();
    const { getArticlesByTopic, articles } = useContext(AxiosContext)
    useEffect(() => {
        getArticlesByTopic(props.match.params._id)
    }, [])
    console.log('asfd', props)
    const mappedArticles = articles.map(
        article => <ArticleCard
            title={article.title}
            created={article.created}
            body={article.body} />)
    return (
        <Paper className={classes.root}>
            {mappedArticles}
            <Topics />
        </Paper>
    );
};

