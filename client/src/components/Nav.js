import React from 'react';
import { makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        justifyContent: 'flexStart'
    },
    icon: {
        padding: 0,
        margin: 0
    }
});

function HomeIcon() {
    return (
        <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="#000000" d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" />
        </svg>
    );
}

function BookshelfIcon() {
    return (
        <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="#000000" d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" />
        </svg>
    );
}

function ArticlesIcon() {
    return (
        <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="#000000" d="M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z" />
        </svg>
    );
}

function AboutIcon() {

    return (
        <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="#000000" d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" />
        </svg>
    );
}

export default function Nav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}>
            <BottomNavigationAction label='Home' value='home' 
                icon={<HomeIcon className={classes.icon}/>} href='/' />
            <BottomNavigationAction label='Articles' value='articles' 
                icon={<ArticlesIcon className={classes.icon}/>} href='/Articles'/>
            <BottomNavigationAction label='Bookshelf' value='bookshelf' 
                icon={<BookshelfIcon className={classes.icon}/>} href='/Bookshelf'/>
            <BottomNavigationAction label='About' value='about' 
                icon={<AboutIcon className={classes.icon}/>} href='About'/>
            
        </BottomNavigation>
    );
};