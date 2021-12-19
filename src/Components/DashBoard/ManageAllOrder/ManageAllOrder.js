import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';

const ManageAllOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])


    const deleteOrder = id => {
        const process = window.confirm("Are you sure you want to cancel this order")
        if (process) {

            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
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

    const changeStatus = id => {


        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT'



        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                    window.location.reload()
                }



            })
    }
    return (

        <div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                        <th>Cancel Or Confirm</th>
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
                                    <Button className='m-2' onClick={() => changeStatus(order._id)} variant="primary">Confirm Order</Button></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>







    );
};

export default ManageAllOrder;