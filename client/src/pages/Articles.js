import React, { useContext, useEffect } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import ArticleCard from '../components/ArticleCard';
import Topics from '../components/Topics';
import {
    makeStyles, Paper, Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 2,
        width: '97%',
        height: '150vh'
    },
}));

export default function Articles(props) {
    const classes = useStyles();
    const { articles, getArticles } = useContext(AxiosContext)
    const mappedArticles = articles.map(
        article =>
            <ArticleCard key={article._id}
                title={article.title}
                body={article.body}
                created={article.created}
                topicId={article.topic}
                articleId={article._id}
            />)
        useEffect(() => {
            getArticles()
        }, [])
    
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h6' component='h6'>
                    {mappedArticles}
                </Typography>
            </Paper>
            <Topics />
        </div>
    );
};
