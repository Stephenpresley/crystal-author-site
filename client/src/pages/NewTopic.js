import React, { useContext } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { AxiosContext } from '../providers/AxiosProvider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
    icon: {
        padding: 0,
        margin: 0
    },
}));

export default function NewTopic() {
    const classes = useStyles();
    const { useInput, addTopic } = useContext(AxiosContext)
    const { value: title, bind: bindTopicTitle } = useInput('')
    const handleAddTopic = e => {
        e.preventDefault();
        addTopic(title)
    }
    return (
        <form className={classes.root}>
            <TextField className='outlined-basic'
                label='New Topic'
                name='newtopic'
                variant='outlined'
                {...bindTopicTitle} />
            <Button className={classes.button}
                variant='contained'
                type='submit'
                startIcon={<AddCircleOutlineIcon className={classes.icon}/>}
                onClick={handleAddTopic}>Topic
            </Button>
        </form>
    );
};