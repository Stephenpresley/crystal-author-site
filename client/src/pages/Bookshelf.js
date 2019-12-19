import React from 'react';
import { makeStyles, Paper, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 2,
        margin: 18.5,
        width: '97%',
        height: '150vh',
        backgroundColor: '#d4d4dc'
    },
    card: {
        margin: 5,
        width: '50%',
        backgroundImage: 'linear-gradient(#393f4d, #1d1e22)',
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        color: '#f0f8ff',
    },
    img:  {
        border: '1px solid #1a1a1a',
        borderRadius: '4px',
        padding: '5px',
        width: '50%',
    },
    h2: {
        margin: 8,
        color: '#f0f8ff',
    },
    p: {
        margin: 8,
        color: '#f0f8ff',
    },
    aTag: {
        textDecoration: 'none',
        color: '#f0f8ff',
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
                    href="https://www.amazon.com/Thumbs-Thoroughfares-Talon-Scott/dp/1733539905/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">
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