import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Routing/HOME.css'


const HOME = () => {
  return (
    <div>
       <header>
            <img src='./images/image7.png' alt='Full-Stack-Development-Courses' className='Banner'/>
           <h1>COURSES OFFERED</h1>
          <NavLink className='center-images'>
              <img src='./images/image1.jpg' alt='Full-Stack-Development-courses' className='style-images'/>
              {/* <h1>{price.props}</h1> */}
              <img src='./images/image2.jpg' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image3.jpg' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image4.jpg' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image5.png' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image6.png' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image7.png' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image8.png' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image9.png' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image10.png' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image11.webp' alt='Full-Stack-Development-courses' className='style-images'/>
              <img src='./images/image12.webp' alt='Full-Stack-Development-courses' className='style-images'/>
          </NavLink>
       </header>
    </div>
)
}

export default HOME