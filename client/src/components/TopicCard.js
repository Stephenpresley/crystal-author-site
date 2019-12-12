import React, { useContext, useEffect } from 'react';
import AxiosContext from '../providers/AxiosProvider'
import {
    makeStyles, Button
} from '@material-ui/core'

const useStyles = makeStyles({
    title: {
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        margin: 5,
    },
});

export default function TopicCard(props) {
    const classes = useStyles();
    const { getArticlesByTopic } = useContext(AxiosContext)
    return (
        <Button className={classes.title}
            onClick={getArticlesByTopic}
            variant='contained'>
            {props.name}
        </Button>
    );
};

