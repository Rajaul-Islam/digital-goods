import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import AddService from '../AddService/AddService';
import MakeAmin from '../MakeAdmin/MakeAmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
const DashBoardNav = () => {
    const { admin, logout } = useAuth()
    console.log(admin);

    let { path, url } = useRouteMatch();
    return (
        <div>
        
             <Navbar  bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand className='text-white' href="#">Dashboard</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header className='bg-primary text-white' closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body
                        className='bg-dark'
                        >







                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className='text-white' as={Link} to='/home'>Home</Nav.Link>
                                <Nav.Link as={Link} to={`${url}`}>Dashboard</Nav.Link>
                                {
                                    admin ? <>

                                        <Nav.Link  as={Link}  to={`${url}/manageOrder`}>Manage All Order</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/addservice`}>Add A Service</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/manageProduct`}>Manage Product</Nav.Link>


                                 </>

                                        :
                                        <>

                                            <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/myOrder`}>My Order</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/review`}>Review</Nav.Link>





                                        </>

                                }
                                <Nav.Link onClick={logout} >LogOut</Nav.Link>



                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


            <Switch>
                <Route exact path={path}>
                    
                </Route>
                <Route path={`${path}/pay`}>
                   
                </Route>
                <Route path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
                </Route>
                <Route path={`${path}/review`}>
                  <Review></Review>
                </Route>
                <Route path={`${path}/manageOrder`}>
                   <ManageAllOrder></ManageAllOrder>
                </Route>
                <Route path={`${path}/addservice`}>
                    <AddService></AddService>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAmin></MakeAmin>
                </Route>
                <Route path={`${path}/manageProduct`}>
                   <ManageProduct></ManageProduct>
                </Route>
               
            </Switch>
        </div>
    );
};

export default DashBoardNav;