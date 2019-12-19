import React, { useContext, useEffect } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import {
    makeStyles, Card, CardContent, Typography, Paper
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: 2,
        margin: 18.5,
        width: '97%',
        height: '150%',
        backgroundColor: '#d4d4dc'
    },
    card: {
        margin: 5,
        backgroundImage: 'linear-gradient(#393f4d, #1d1e22)',
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        color: '#f0f8ff',
    },
    pos: {
        marginBottom: 12,
        color: '#f0f8ff',
    },
    name: {
        fontSize: 14,
        fontWeight: 200,
    }
});

const Home = () => {
    const classes = useStyles();
    const { articles, getArticles } = useContext(AxiosContext)
    useEffect(() => {
        getArticles()
    }, [])
    const arts = articles.slice(0, 2)

    return (
        <Paper className={classes.root}>
            <Typography variant='h6' component='h6'>
                {articles ?
                    arts.map(art =>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title}>
                                    {art.title}
                                    <br />
                                    {new Date(art.created).toUTCString()}
                                </Typography>
                                <Typography className={classes.pos}>
                                    {art.body}
                                </Typography>
                            </CardContent>
                        </Card>)
                    : <h2><i> We can't get the list of recent articles,
                                I don't know what happened.
                                It worked on my machine.
                        </i></h2>}
            </Typography>
        </Paper>
    );
};

export default Home;