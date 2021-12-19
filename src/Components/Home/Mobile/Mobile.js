import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Mobile.css'
const Mobile = ({ mobile }) => {
    return (
        <Col className='p-0'>
            <div className= "containera">
                <div className="carda">
                    <div className='image'>
                        <img src={mobile.img} alt="" />
                    </div>
                    <div className= "content">
                        <h3>{mobile.name}</h3>
                        <p className='text-white'>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        <Link to={`/processorder/${mobile._id}`}> <Button
                            variant="outline-warning"
                            className='btn-color' >Process to Buy</Button></Link>
                    </div>
                </div>
            </div>

        </Col>
    );
};

export default Mobile;