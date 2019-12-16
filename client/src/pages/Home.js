import React, { useContext, useEffect } from 'react';
import { AxiosContext } from '../providers/AxiosProvider'
import {
    makeStyles, Card, CardContent, Typography, Paper
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: 2,
        width: '97%'
    },
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
    }
});

const Home = () => {
    const classes = useStyles()
    const { articles, getArticles } = useContext(AxiosContext)
    useEffect(() => {
        getArticles()
    }, [])
    const arts = articles.slice(0, 2)

    return (
        <Paper className={classes.root}>
            <Typography variant='h5' component='h3'>
                {articles ?
                    arts.map(art =>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title}>
                                    {art.title}
                                </Typography>
                                <br />
                                {new Date(art.created).toUTCString()}
                                <Typography className={classes.pos}>
                                    {art.body}
                                </Typography>
                            </CardContent>
                        </Card>)
                    :   <h2><i> We can't get the list of recent articles,
                                I don't know what happened.
                                It worked on my machine.
                        </i></h2>}
            </Typography>
        </Paper>
    );
};

export default Home;