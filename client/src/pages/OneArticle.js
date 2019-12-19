import React, { useEffect, useContext } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import { withRouter, Redirect } from 'react-router-dom';
import Topics from '../components/Topics';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    makeStyles, Card, CardContent, Typography, Button, Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 2,
        margin: 5,
        width: '97%',
        height: '120%',
        backgroundColor: '#d4d4dc',

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
    },
    button: {
        margin: theme.spacing(1),
        color: '#393f4d',
    },
}));
const OneArticle = (props) => {
    const classes = useStyles()
    const { _id } = props.match.params
    const { oneArticle, getOneArticle, deleteArticle, token, redirect } = useContext(AxiosContext)
    useEffect(() => {
        getOneArticle(_id)
    }, []);
    const { title, body, created } = oneArticle || props;
    const date = new Date(created).toUTCString()
    return (
        <Paper className={classes.root}>
            {redirect === false ?
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
                {token ?
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteArticle(_id)}>
                    Delete
                </Button>
                : null
                }
            </Card>
            : <Redirect to='/Articles' />
            }
            <Topics />
        </Paper>
    );
};

export default withRouter(OneArticle);