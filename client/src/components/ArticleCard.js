import React, { useContext } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    makeStyles, Card, CardContent, Typography, Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        margin: 5,
        backgroundImage: 'linear-gradient(#393f4d, #1d1e22)',
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        color: '#f0f8ff',
    },
    pos: {
        marginBottom: 12,
        color: '#f0f8ff',
    },
    name: {
        fontSize: 14,
        fontWeight: 200,
    },
    aTag: {
        textDecoration: 'none',
        color: "#1a1a1a"
    },
    button: {
        margin: theme.spacing(1),
        color: '#393f4d',
    },
}));

export default function ArticleCard(props) {
    const { token, deleteArticle } = useContext(AxiosContext)
    const classes = useStyles()
    let { title, created, body, articleId } = props
    const date = new Date(created).toUTCString();
    return (
        <Card className={classes.card}>
            <a href={`/articles/oneArticle/${articleId}`}
                className={classes.aTag}>
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
            </a>
            {token ?
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteArticle(articleId)}>
                    Delete
                </Button>
                : null
            }
        </Card>
    );
};