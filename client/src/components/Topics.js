import React, { useContext } from 'react';
import { AxiosContext } from '../providers/AxiosProvider';
import TopicCard from './TopicCard'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    makeStyles, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 53,
        left: 0,
        justifyContent: 'flexStart'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold
    }
}));

export default function Topics(props) {
    const classes = useStyles();
    const { topics } = useContext(AxiosContext);
    const mappedTopics = topics.map(
        topic =>
            <TopicCard key={topic._id}
                topicInfo={topic}
            />);
    return (
            <ExpansionPanel className={classes.root}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                    <Typography className={classes.heading}>
                        Topics
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {mappedTopics}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
    );
};