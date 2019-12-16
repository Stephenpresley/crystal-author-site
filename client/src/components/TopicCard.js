import React from 'react';
import { makeStyles, Button } from '@material-ui/core'

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
    const { name, _id } = props.topicInfo

    return (
        <Button className={classes.title}
            variant='contained'
            href={`/articles/${_id}`}>
            {name}
        </Button>
    );
};


