import React from 'react'
import Object_src from '../object_src/Object_src'
import './Boxes.css'
export default function Boxes() {

  return (
    <div className='main__boxes'>

        <div className='inner_box'>
        <Object_src this_images="https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/smartphones/PCD_B4_KV_Merchandising_376X376_pc.png?$376_376_PNG$"
          this_text="Galaxy Z Flip4"/>
        </div>
        <div className='inner_box'>
        <Object_src this_images="https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/smartphones/PCD_Q4_KV_Merchandising_160x160_pc.png?$160_160_PNG$"
          this_text="Galaxy Z fold4"/>
        <Object_src this_images="https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/smartphones/PCD_S22_KV_Merchandising_160X160_pc.png?$160_160_PNG$"
          this_text="Galaxy S22 | S22+"/>
        <Object_src this_images="https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/smartphones/PCD_B_KV_Merchandising_160X160_pc.png?$160_160_PNG$"
        this_text="Galaxy S22 Ultra"/>
        <Object_src this_images="https://images.samsung.com/is/image/samsung/assets/in/2203/pcd/PCD_Product-Tile_PC_160X160.png?$160_160_PNG$"
        this_text="Galaxy A535G"/>
        </div>

    </div>
  )
}
