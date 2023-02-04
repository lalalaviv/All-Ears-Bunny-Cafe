import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.css'
import home from "../../assets/images/home.jpg"

function Carousels() {
    return(
        <center>

        <Carousel>
        <div>
            <img src={home} alt="image1" />
            <p className="legend-1">Surround yourself with bunnies while enjoying your meal!
            </p>
        </div>  
        <div>
            <img src="" alt="image1" />
            <p className="legend-1">Hop hop hurray</p>
        </div> 
        <div>
            <img src="" alt="image1" />
            <p className="legend-1">Alice in wonderland</p>
        </div>

        <div>
            <img src="" alt="image1" />
            <p className="legend-1">100% vegetarian cafe
            </p>
        </div>  
        <div>
            <img src="" alt="image1" />
            <p className="legend-1">Bunny day!
            </p>
        </div>  
        <div>
            <img src="" alt="image1" />
            <p className="legend-1">Bake a cake day</p>
        </div>
    </Carousel></center>
    )
}

export default Carousels