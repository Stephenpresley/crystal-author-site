import React from 'react';
import {makeStyles, Paper} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        padding: 2,
        margin: 5,
        width: '50%',
        height: '100vh',
        backgroundColor: '#d4d4dc',
    },
    aTag: {
        textDecoration: 'none',
        color: "#1a1a1a"
    },
    p: {
        margin: 10,
        textAlign: 'justify'
    },
}))

const About = () => {
    const classes = useStyles();
    return (
        <div className='about'>
            <Paper className={classes.root}>
                <div className={classes.p}><b>About Me:</b></div>
                <br/>
                <p className={classes.p}>
                    An accomplished HR professional, specializing in talent acquisition and recruitment. 
                    Areas of expertise are aerospace and defense, pharmaceuticals, manufacturing and logistics. 
                    Expertise in both United States and Canadian HR laws and regulations. 
                    Career supported by a masters degree in industrial and organizational psychology, and SHRM-CP certificate.
                </p>
                <br/>
                <p className={classes.p}>
                    As I continue growing and honing my expertise, I hope to share that with others through various types of media; 
                    from blogs to community forums. I can be reached with any questions at <a className={classes.aTag}
                        href='mailto:crystallpresley@gmail.com'>crystallpresley@gmail.com!</a> 
                </p>
            </Paper>
        </div>
    );
};

export default About;