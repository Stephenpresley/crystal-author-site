import React, {
    useContext, useRef, useState, useEffect
} from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import {
    makeStyles, TextField, Button, Select, FormControl, InputLabel, MenuItem
} from '@material-ui/core';
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
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    button: {
        fontSize: 14.
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    icon: {
        padding: 0,
        margin: 0
    },
}));

export default function NewArticle() {
    const classes = useStyles();
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const { useInput, addArticle, topics } = useContext(AxiosContext);
    const { value: topicId, bind: bindArticleTopic } = useInput('');
    const { value: title, bind: bindArticleTitle } = useInput('');
    const { value: body, bind: bindArticleBody } = useInput('');
    const topicsMap = topics.map(topic => (
        <MenuItem value={topic._id}>{topic.title}</MenuItem>
    ))
    const handleAddArticle = e => {
        e.preventDefault()
        addArticle(topicId, title, body)
    };
    return (
        <div className={classes.root}>
            <FormControl variant='outlined'
                className={classes.formControl}>
                <InputLabel ref={inputLabel}
                    id="demo-simple-select-outlined-label">
                    Topic
                </InputLabel>
                <Select
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    value={topicId}
                    labelWidth={labelWidth}
                    {...bindArticleTopic}
                >
                    {topicsMap}
                </Select>
                <TextField className='outlined-basic'
                    label='Title'
                    name='articleTitle'
                    variant='outlined'
                    {...bindArticleTitle} />
                <TextField className='outlined-basic'
                    label='Body'
                    name='articleBody'
                    variant='outlined'
                    {...bindArticleBody} />
                <Button className={classes.button}
                    variant='contained'
                    type='submit'
                    startIcon={<AddCircleOutlineIcon className={classes.icon}/>}
                    onClick={handleAddArticle}>Article/Blogpost
                </Button>
            </FormControl>
        </div>
    );
};