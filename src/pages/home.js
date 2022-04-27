import { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Fragment>
            <h1> Hotel Name </h1>
            <Button href='/login'>Login</Button>
            <Button href='/room-booking'>Book Room</Button>
        </Fragment>
    );
}

export default Home;