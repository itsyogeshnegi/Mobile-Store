import React from 'react'
import './Find.css'
function Find() {
  return (
    <div className='main_finder'>
        <div className='inner_finder1'>
            <span>Find your Galaxy Z</span>
            <p>Get matched with your ideal foldable phone.</p>
            <button id='finder_btn'>Start here</button>
        </div>
        <div className='inner_finder2'>
            <img src='https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-pcd/galaxy-z-finder/galaxy-z-finder-intro.jpg?$ORIGIN_JPG$'/>
        </div>
    </div>
  )
}

export default Find