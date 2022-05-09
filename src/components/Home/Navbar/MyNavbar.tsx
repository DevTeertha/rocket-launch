import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className="text-white" to="/">
                        Rocket
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className="text-white" to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-white" to="/">
                                Launches
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-white" to="/">
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-white" to="/">
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
