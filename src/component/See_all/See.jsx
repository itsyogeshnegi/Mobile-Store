import React from 'react'
import './See.css'
function See() {
  return (
    <div className='main__see'>
        <div className='see_first'>
            <h1>Galaxy S</h1>
            <p>Welcome to the epic standard</p>
            <button id='down'>See All</button>
        </div>
        <div className='see_second'>
            <img src='https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_Combo_KV_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$'/>
        </div>
    </div>
  )
}

export default See