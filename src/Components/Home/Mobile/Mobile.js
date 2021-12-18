import React from 'react';
import { Col } from 'react-bootstrap';
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
                        <h3>This is content</h3>
                        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                </div>
            </div>

        </Col>
    );
};

export default Mobile;