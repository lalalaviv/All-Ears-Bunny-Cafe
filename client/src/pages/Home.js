import React from 'react';
import Carousels from "../components/Home/Carousel"
import '../components/Home/home.css'
import { Button, Card, Container}from 'react-bootstrap'



import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

    <h1 className='h1-font' style={{backgroundColor:"white"}}> All Ears Bunny Cafe</h1>
    <Container className='container-home'>
    
    <Carousels />   

    <Card className='card-1'>

    <h1 className='h1-font'> Perfect place for animal lovers, particularly those that love bunnies. Enjoy good coffee and food while being surrounded by cute bunnies.</h1>
    <p>Located in Melbourne, Australia. Established 2023.  <br/>
    <br/>

    Our menu changes seasonally and includes light meals, or big lunches suitable also for Vegetarians and Vegans.  
    <br/>    <br/> <Link to='/menu'><Button className="inquire">View Menu</Button></Link>
    <br/><br/>

    <h1 className='h1-font'>Events</h1>
    In addition to our tasty menu, we also offer services on request such as catering for local businesses or local events, <br/>
    baking and barista classes, as well as in-house events created by members of our All Ears Bunny Cafe community.
    <br/><br/>
    We are also available for private events and can host for 25-100 guests. For larger numbers we have an event planner to help you organize everything from choosing a theme and arranging decoration to customizing food and beverage packages.  Feel free to reach out to allearbunnycafe@gmail.com to inquire.
    <br/><br/>
  <Button onClick={() => window.location = 'mailto:allearsbunnycafe@gmail.com'} className="inquire">Inquire Now</Button>
    </p></Card>
    </Container>
    </div>
  )
}

export default Home
