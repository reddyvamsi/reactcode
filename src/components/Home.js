import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import lear from '../images/p.jpg'
import udmi from '../images/udemy.jpg'
import Card from '../card';
import Uicard from "../Uicard";
const Home = (props) => {
    return (
        <div className='ui comments four column grid container very relaxed'>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={udmi}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={udmi}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={udmi}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                <div>
                <div>
                <h2>A broad selection of courses</h2>
                </div>
                <p>Choose from 204,000 online video courses with new additions published every month</p>
               </div>
            <div className="row">
                <div class="four column">
                <Uicard>
                    <Card name="vamsi"
                        price="2000"
                        text="The Complete 2022 Web Development Bootcamp"
                        picture={lear}
                        noOfRatings="3599"
                    ></Card> 
                </Uicard>
               </div>
               <div class="four column">
                <Uicard>
                    <Card name="krishna" 
                        price="3000"
                        text="Learn javascript: The Complete javascript Programming Course"
                        picture={lear}
                        noOfRatings="3599"
                    ></Card>
                </Uicard>
               </div>
               <div class="four column">
                <Uicard >
                    <Card name="vishnu"
                        price="4000"
                        text="Learn javascript: The Complete javascript Programming Course"
                        picture={lear}
                        noOfRatings="3599"
                    ></Card>
                </Uicard>
                </div>
                <div class="four column">
                <Uicard class="four column">
                    <Card  name="Ravi"
                        price="5000"
                        text="Learn javascript: The Complete javascript Programming Course"
                        picture={lear}
                    ></Card>
                </Uicard>
                </div>
                {/* <Card name="Ravi"
       price="5000"
       text="Learn javascript: The Complete javascript Programming Course"
       picture={lear}
       ></Card> */}
            </div>
            </div>
        //</div>
        // <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
        //     <h3 className='ui header'>Home</h3>
        //     <p>The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.</p>
        // </div>
    )
}
export default Home