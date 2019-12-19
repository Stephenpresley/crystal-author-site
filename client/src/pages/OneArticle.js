import React, { useEffect, useContext } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import { withRouter } from 'react-router-dom';
import Topics from '../components/Topics'
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
    },
});
const OneArticle = (props) => {
    const classes = useStyles()
    const { _id } = props.match.params
    const { oneArticle, getOneArticle } = useContext(AxiosContext)
    useEffect(() => {
        getOneArticle(_id)
    }, []);
    const { title, body, created } = oneArticle || props;
    const date = new Date(created).toUTCString()
    return (
        <div>
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
            </Card>
            <Topics />
        </div>
    );
};

export default withRouter(OneArticle);