import React from 'react';
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    titleText: {
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        margin: 5,
    },
});

export default function TopicCard(props) {
    const classes = useStyles();
    const { title, _id } = props.topicInfo
    return (
        <Button className={classes.titleText}
            variant='contained'
            href={`/articles/${_id}`}>
            {title}
        </Button>
    );
};


