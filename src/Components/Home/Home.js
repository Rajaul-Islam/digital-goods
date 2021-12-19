import React from 'react';
import Banner from './Banner/Banner'
import { useEffect, useState } from "react";
import Mobile from './Mobile/Mobile';
import { Row } from 'react-bootstrap';
import UserReview from '../UserReview/UserReview';
import GetEmail from '../GetEmail/GetEmail';
import Header from '../Shared/Header/Header';


const Home = () => {
    // const mobileCollection=[
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     },
    //     {
    //         name: "samsung Note 10+",
    //         brand: "samsung",
    //         price:"1000000",
    //         color: "white",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium itaque vel repellendus sunt quia at porro, culpa ab odit!",
    //         img:"https://i.ibb.co/r6s9q2m/image.png"
    //     }
        
    // ]
    const [mobiles, setMobiles] = useState([])
    useEffect(()=>{
        // fetch('https://boiling-ravine-21246.herokuapp.com/services')
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])
   
    return (
        <div >
           <Header></Header>
        <Banner></Banner>
       <div className=' container-fluid' style={{backgroundColor:'#1b252f'}}>
        <h1 className='text-center text-white py-5'>Top selling Mobile</h1>  
        <Row xs={1} md={2} lg={3} className="g-4">
         
         {
             mobiles.map(mobile=><Mobile mobile={mobile}></Mobile>)
         }
         </Row>
       </div>
       <UserReview></UserReview>
       <GetEmail></GetEmail>
        </div>
    );
};

export default Home;