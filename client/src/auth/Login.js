import React, {useContext, useEffect} from 'react';
import {makeStyles, TextField, Button, Paper} from '@material-ui/core'
import { AxiosContext } from '../providers/AxiosProvider';


const useStyles = makeStyles(theme =>({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
            display: 'flex',
            flexDirection: 'column',
        },
    },
    title: {
        fontSize: 14,
    },
}));

export default function Login () {
    const classes = useStyles();
    const {user, login} = useContext(AxiosContext)
    const handleChange = e =>{

    }

    return (
        <form className={classes.root} 
            noValidate 
            autoComplete='off'>
            <TextField id='outlined-basic' 
                label='Username' 
                name='username'
                variant='outlined' />
            <TextField id='outlined-basic' 
                label='Password' 
                name='password'
                variant='outlined' />
            <Button className={classes.title}
                variant='contained'>Login
            </Button>
        </form>
    );
};

