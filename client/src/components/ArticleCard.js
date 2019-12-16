import React from 'react';
import {
    makeStyles, Card, CardContent, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        margin: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
    },
    pos: {
        marginBottom: 12,
    },
    name: {
        fontSize: 14,
        fontWeight: 200,
    }
});

const ArticleCard = (props) => {
    const classes = useStyles()
    let { title, created, body } = props
    const date = new Date(created).toUTCString();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>
                    {title}
                    <br />
                    {date}
                </Typography>
                <Typography className={classes.pos}>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;