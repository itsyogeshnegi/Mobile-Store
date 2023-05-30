import React, { useEffect, useState } from 'react'
import './Responsive_menu.css'
function Responsive_menu({value}) {

    const [cancelled , notcancelled] = useState(value)
    const btn_cancel = () => {
        notcancelled(100)
    }

    useEffect(() => {
      // if(value)
      notcancelled(value)
    }, [value])
    

  return (
    <div className='main_responsive_work'
    style={{bottom:`${cancelled}%`}}
    >
        <div className='cancel_btn' ><i class="fa-solid fa-xmark" onClick={btn_cancel}></i></div>

    </div>
  )
}

export default Responsive_menu