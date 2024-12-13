import React from 'react'
import './Blogs.css'
import blog1 from '../../assets/blogs-1.jpg'
import blog2 from '../../assets/blogs-2.jpg'
import blog3 from '../../assets/blogs-3.jpg'
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";


function Blogs() {
  return (
    <div className='blogs' id='blogs'>
      <div className='blog-news'>
         <h3>Blog or News</h3>
         <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>   
      <div className='blogs-boxs'>
          <div className='blog-box'>
              <img src={blog1}/>
              <div className='date-time'>
                <span className='date'><MdOutlineDateRange/>20th December, 2023</span>
                <span className='time'><IoMdTime />5 min read</span>
              </div>
              <h6>Design your apps in your own way</h6>
              <p>This is required when, for example, the final text is not yet available.</p>
              <button className='read-more'>Read More</button>
          </div>
          <div className='blog-box'>
              <img src={blog2}/>
              <div className='date-time'>
                <span className='date'><MdOutlineDateRange />20th December, 2023</span>
                <span className='time'><IoMdTime />5 min read</span>
              </div>
              <h6>How apps is changing the IT world</h6>
              <p>This is required when, for example, the final text is not yet available.</p>
              <button className='read-more'>Read More</button>
          </div>
          <div className='blog-box'>
              <img src={blog3}/>
              <div className='date-time'>
                <span className='date'><MdOutlineDateRange />20th December, 2023</span>
                <span className='time'><IoMdTime />5 min read</span>
              </div>
              <h6>Smartest Applications for Business</h6>
              <p>This is required when, for example, the final text is not yet available.</p>
              <button className='read-more'>Read More</button>
          </div>
      </div>
      
    </div>
  )
}

export default Blogs
