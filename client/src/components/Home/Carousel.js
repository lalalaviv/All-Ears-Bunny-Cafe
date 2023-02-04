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
            <img src="https://user-images.githubusercontent.com/106384519/216765171-ec5af927-8eb0-492b-85ec-a6380dee4c50.png" alt="image1" />
            <p className="legend-1">Hop hop hurray</p>
        </div> 
        <div>
            <img src="https://user-images.githubusercontent.com/106384519/216765198-9871c9f1-a434-4224-9966-b748871b1aec.png" alt="image1" />
            <p className="legend-1">Alice in wonderland</p>
        </div>

        <div>
            <img src="https://user-images.githubusercontent.com/106384519/216765252-f65e504d-05fb-43b1-a4ff-2e240a1cbf01.jpeg" alt="image1" />
            <p className="legend-1">100% vegetarian cafe
            </p>
        </div>  
        <div>
            <img src="https://user-images.githubusercontent.com/106384519/216765214-4e4f7d2f-1b7a-4d34-bf5a-42fd60d151f5.jpeg" alt="image1" />
            <p className="legend-1">Bunny day!
            </p>
        </div>  
        <div>
            <img src="https://user-images.githubusercontent.com/106384519/216765265-851b3f6f-f6b5-4062-a20a-51627f8b1e57.png" alt="image1" />
            <p className="legend-1">Bake a cake day</p>
        </div>
    </Carousel></center>
    )
}

export default Carousels