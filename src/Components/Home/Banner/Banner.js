import React from 'react';
import { Button } from 'react-bootstrap';
import Mobile from '../Mobile/Mobile';
import './Banner.css'
const Banner = () => {
    return (
        <div className='intro-div'>
            <div className=''>
                <div className='start-div d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bolder'>Hello, This is Digital IT</h1>
                   <h5 className='fw-bolder'>What ever you decide to do,<br/> Make sure it makes you happy</h5>
                   <Button className=''>See More</Button>
                </div>
            </div>
          
        </div>
    );
};

export default Banner;