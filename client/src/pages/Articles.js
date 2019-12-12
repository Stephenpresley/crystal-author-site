import React, {useContext} from 'react';
import {
    makeStyles, Paper, Typography
} from "@material-ui/core";
import { AxiosContext} from '../providers/AxiosProvider';
import ArticleCard from '../components/ArticleCard'
import Topics from '../components/Topics'


const useStyles = makeStyles(theme => ({
    root: {
        padding: 2,
        width: '97%'
    },
}));

export default function Articles (props) {
    const classes = useStyles();
    const {articles} = useContext(AxiosContext)
    const mappedArticles = articles.map(
        article => 
            <ArticleCard key={article._id}
                title={article.title}
                body={article.body}
                created={article.created}
            />)
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h5' component='h3'>
                    {mappedArticles}
                </Typography>
            </Paper>
            <Topics/>
        </div>
    );
};
