import React from 'react'
import './Pricing.css'
import { IoCheckmarkDoneSharp } from "react-icons/io5";


function Pricing() {
  return (
    <div className='pricing' id='pricing'>
      <div className='our-pricing'>
        <h3>Our Pricing</h3>
        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>
      <div className='boxs-pricing'>
        <div className='box-pricing'>
          <h4>Free</h4>
          <h2>$0/mo</h2>
          <p className='check'><IoCheckmarkDoneSharp className='checkmark'/>We offers a free month of service for new customers.</p>
          <button className='btn-pricing'>Free Demo</button>
        </div>
        <div className='box-pricing'>
          <h4>Free</h4>
          <h2>$9/mo</h2>
          <p className='check'><IoCheckmarkDoneSharp className='checkmark'/>We offers a free month of service for new customers.</p>
          <button className='btn-pricing'>Free Demo</button>
        </div>
        <div className='box-pricing'>
          <h4>Free</h4>
          <h2>$7/mo</h2>
          <p className='check'><IoCheckmarkDoneSharp className='checkmark'/>We offers a free month of service for new customers.</p>
          <button className='btn-pricing'>Free Demo</button>
        </div>
        <div className='box-pricing'>
          <h4>Free</h4>
          <h2>$5/mo</h2>
          <p className='check'><IoCheckmarkDoneSharp className='checkmark'/>We offers a free month of service for new customers.</p>
          <button className='btn-pricing'>Free Demo</button>
        </div>
        

      </div>
    </div>
  )
}

export default Pricing
