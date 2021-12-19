import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    const handleDeleteProduct = id => {
        const process = window.confirm("Are you sure you want to delete this product")
        if (process) {
            console.log(id);
            fetch(`http://localhost:5000/services/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Product deleted successfully')
                    }
                })
        }

    }
    return (
        <div>
             <Container>
            <Row xs={2} md={5} className="g-4">
                {
                    products.map(product => <Col>
                        <Card key={product._id}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button onClick={() => handleDeleteProduct(product._id)} >Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }



            </Row>
        </Container>
        </div>
    );
};

export default ManageProduct;