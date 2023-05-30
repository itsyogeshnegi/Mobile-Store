import React from 'react'
import './Company.css'
function Company({company_logo}) {
  return (
    <div className='main_company_box'>
        <img src={company_logo}/>
    </div>
  )
}

export default Company