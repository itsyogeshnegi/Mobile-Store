import React from 'react'
import './Object_src.css'
function Object_src({this_images , this_text }) {
  return (
    <div className='main_src'>
        <div className='images_src'>
          <img src={this_images}/>
        </div>
        <div className='names_of_phone'>{this_text}</div>
        <button type='button' id='inside'>Learn More</button>
    </div>
  )
}

export default Object_src