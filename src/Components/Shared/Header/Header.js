import React from 'react';
import './Header.css'
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const { displayName, photoURL, email } = user;

    return (
        <div className="sticky-top">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                            <Nav.Link href="#link"><FontAwesomeIcon icon={faShoppingCart} /><Badge className='badge' bg="secondary">0</Badge>
                            </Nav.Link>

                            {user.displayName ? (
                                <>
                                    <NavDropdown
                                        title={
                                            <>
                                                <img
                                                    style={{ width: "45px", borderRadius: "50%" }}
                                                    src={user.photoURL}
                                                    alt="profile"
                                                />
                                            </>
                                        }
                                    >
                                        <div className="text-center bg-dark">
                                        <Nav.Link as={NavLink} to='/dashboard'>DashBoard</Nav.Link>
                                            <div className="text-center">
                                                <button onClick={logout} className="btn btn-primary">
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to='/login'>LogIn</Nav.Link>
                                    <Nav.Link as={NavLink} to='/signup'>SignUp</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;