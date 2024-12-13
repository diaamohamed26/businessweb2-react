import React from 'react'
import './Services.css'
import Tabs from './Tabs'
import laptop from '../../assets/laptop.png'
import { MdBusinessCenter } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { LiaBuromobelexperte } from "react-icons/lia";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";




function Services() {
  return (
    <div className='services' id='services'>
      <div className='top-services'>
      <div className='par-services'>
        <h1>Our Services</h1>
        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>
      <div className='boxs-services'>
        <div className='box-service'>
          <MdBusinessCenter className='icon'/>
          <h4>Grow Your Business</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <FaDollarSign className='icon'/>
          <h4>Drive More Sales</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <LiaBuromobelexperte className='icon'/>
          <h4>Handled By Expert</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <GiTeamIdea className='icon'/>
          <h4>Discussion For Idea</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <AiOutlineAntDesign className='icon'/>
          <h4>Web Design</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <IoIosGitNetwork  className='icon'/>
          <h4>Network Security</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <IoShareSocialOutline className='icon'/>
          <h4>Social Media</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>

        <div className='box-service'>
          <MdOutlineHomeRepairService className='icon'/>
          <h4>Design & Branding</h4>
          <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          <button className='read-more-btn'>
           Read More 
          </button>
        </div>
      </div>
      </div>
      <Tabs/>

      <div className='laptop-services'>
        <div className='laptop'>
         <img src={laptop}/>
        </div>
        
        <div className='laptop-inf'>
          <div className='free-trial'> 
            <p>Get Free Trial</p>
            <h3>Get An Easy Start <br/>
            With Upcover Now</h3>
          </div>
          <div className='simple-text'>
            <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
            <button className='btn-4'>
              Read More
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Services
