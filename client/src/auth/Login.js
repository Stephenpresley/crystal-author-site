import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { makeStyles, TextField, Button } from '@material-ui/core'
import { AxiosContext } from '../providers/AxiosProvider';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
            display: 'flex',
            flexDirection: 'column',
        },
    },
    button: {
        fontSize: 14,
    },
}));

export default function Login() {
    const classes = useStyles();
    const { login, useInput } = useContext(AxiosContext)
    const { value: username, bind: bindUsername } = useInput('')
    const { value: password, bind: bindPassword } = useInput('')
    const handleLogin = e => {
        e.preventDefault()
        login(username, password)
    }

    return (
        <div>
            {localStorage.getItem('token') === null ?
                <form className={classes.root}
                    noValidate
                    autoComplete='on'>
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
                    <Button className={classes.button}
                        variant='contained'
                        type='submit'
                        onClick={handleLogin}>Login
                    </Button>
                </form>
                : <Redirect to='/newTopic' />}
        </div>
    );
};
