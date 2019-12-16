import React, {useContext} from 'react';
import {makeStyles, TextField, Button} from '@material-ui/core'
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
    const {login, useInput, logout} = useContext(AxiosContext)
    const { value: username, bind: bindUsername } = useInput('')
    const { value: password, bind: bindPassword } = useInput('')
    const handleSubmit = e =>{
        e.preventDefault()
        login(username, password)
    }

    return (
        <form className={classes.root} 
            noValidate 
            autoComplete='on'
            onSubmit={handleSubmit}>
            <TextField className='outlined-basic' 
                label='Username' 
                name='username'
                variant='outlined'
                {...bindUsername} />
            <TextField className='outlined-basic' 
                label='Password' 
                name='password'
                variant='outlined'
                type="password"
                {...bindPassword} />
            {localStorage.getItem('token') === null ?
            <Button className={classes.title}
                variant='contained'
                type='submit'>Login
            </Button>
            :
            <Button className={classes.title}
                variant='contained'
                onClick={logout}>Logout
            </Button>}
        </form>
    );
};
