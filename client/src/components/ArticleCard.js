import React from 'react';
import {
    makeStyles, Card, CardContent, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        margin: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
    },
    pos: {
        marginBottom: 12,
    },
    name: {
        fontSize: 14,
        fontWeight: 200,
    },
    aTag: {
        textDecoration: 'none',
    },
});

export default function ArticleCard(props) {
    const classes = useStyles()
    let { title, created, body, articleId } = props
    const date = new Date(created).toUTCString();
    console.log('art', props)
    return (
        <a href={`/articles/oneArticle/${articleId}`}
            className={classes.aTag}>
            <Card className={classes.card}>
                <CardContent >
                    <Typography className={classes.title}>
                        {title}
                        <br />
                        {date}
                    </Typography>
                    <Typography className={classes.pos}>
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </a>
    );
};