import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        const url = `https://boiling-ravine-21246.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const deleteOrder = id => {
        const process = window.confirm("Are you sure you want to cancel this order")
        if (process) {

            const uri = `https://boiling-ravine-21246.herokuapp.com/orders/${id}`
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successFully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        console.log(remainingUsers)
                        setOrders(remainingUsers);
                    }
                })
        }

    }
    return (
        <div>
            {/* <Container>
        <Row xs={1} md={3} className="g-4">

            {
                orders.map(order =>
                    <Col key={order._id}>

                        <Card>
                            <Card.Header>{order.userName}</Card.Header>
                            <Card.Body>
                                <Card.Title>{order.serviceName}</Card.Title>
                                <Card.Text>
                                    {order.userEmail}
                                    <br></br>
                                    {order.orderStatus}
                                </Card.Text>
                                <Button onClick={() => deleteOrder(order._id)} variant="primary">Cancel Order</Button>
                            </Card.Body>
                        </Card>


                    </Col>





                )
            }
        </Row >
    </Container> */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                {
                    orders.map(order =>
                        <tbody>
                            <tr>
                                <td>{order._id}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.userName}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.orderStatus}</td>
                                <td><Button onClick={() => deleteOrder(order._id)} variant="primary">Cancel Order</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>

        </div>
    );
};

export default MyOrder;