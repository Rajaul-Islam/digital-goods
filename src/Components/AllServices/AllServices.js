import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Mobile from '../Home/Mobile/Mobile';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllServices = () => {
    const [mobiles, setMobiles] = useState([])
    useEffect(()=>{
        // fetch('https://boiling-ravine-21246.herokuapp.com/services')
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])
    return (
        <div style={{backgroundColor: '#1b252f'}}>
            <Header></Header>
            <h1  className='py-5 text-white text-center'>Our Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
         
         {
             mobiles.map(mobile=><Mobile mobile={mobile}></Mobile>)
         }
         </Row>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;