import React from 'react';
import { Container } from 'react-bootstrap';
import Rockets from '../../Rockets/Rockets';

const Header = () => {
    return (
        <section>
            <Container>
                <Rockets />
            </Container>
        </section>
    );
};

export default Header;
