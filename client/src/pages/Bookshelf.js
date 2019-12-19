import React from 'react';
import { makeStyles, Paper, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 2,
        width: '97%',
        height: '150vh'
    },
    card: {
        margin: 5,
        width: '50%'
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
    },
    img:  {
        border: '1px solid #1a1a1a',
        borderRadius: '4px',
        padding: '5px',
        width: '50%',
    },
    h2: {
        margin: 8,
    },
    p: {
        margin: 8,
    },
    aTag: {
        textDecoration: 'none',
    },
}))

const Bookshelf = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Card className={classes.card}>
                <img className={classes.img}
                    src="https://images-na.ssl-images-amazon.com/images/I/51QW7qW2viL.jpg" 
                    alt=""/>
                <a className={classes.aTag}
                    target='_blank' rel="noopener noreferrer" 
                    href="https://www.amazon.com/dp/B07T8DXY32/ref=rdr_kindle_ext_tmb">
                    <h2 className={classes.h2}><b>Thumbs And Thoroughfares</b></h2>
                </a>
                <p className={classes.p}>Richie Vegas has decided to go hitchhiking with his two most adventurous friends. 
                    A beautiful fortuneteller, Sally Riddler, has a freak-out during his psychic reading. 
                    When his best friend goes home early, frightening things start manifesting in the night and the hardships of the road itself take a toll on his sanity. 
                    Richie realizes he is at the center of an initiation process for a dark brotherhood with sinister intent and considerable supernatural ability. 
                    All the while Sally is hot on his trail, trying to save him from a fate worse than death. Thumbs and Thoroughfares is a masterwork of fiction.
                </p>
            </Card>
        </Paper>
    );
};

export default Bookshelf;