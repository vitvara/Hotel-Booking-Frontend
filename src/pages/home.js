import { Button } from '@mui/material';
import { Fragment } from 'react';
import classes from './home.module.css';

const Home = () => {
    return (
        <Fragment>
            <div className={classes.container}>
            <h1> Hotel Name </h1>
            <Button href='/login'>Login</Button>
            <Button href='/room-booking'>Book Room</Button>
            </div>
        </Fragment>
    );
}

export default Home;