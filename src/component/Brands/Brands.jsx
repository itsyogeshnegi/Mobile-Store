import React from 'react'
import './Brands.css'
import Company from './Company'
function Brands() {

    var all_brands = [

        {
            id:0,
            photos:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png'
        },
        {
            id:1,
            photos:'https://i.pinimg.com/originals/31/98/fc/3198fc856619261e439a553d8b6dd83f.png'
        },
        {
            id:2,
            photos:"https://download.logo.wine/logo/OnePlus/OnePlus-Logo.wine.png"
        },
        {
            id:3,
            photos:'https://www.logo.wine/a/logo/Oppo/Oppo-Logo.wine.svg'
        },
        {
            id:4,
            photos:'https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.png'
        },
        {
            id:5,
            photos:'https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-Logo-2014.png'
        }

    ]

  return (
    <div className='main__brands'>
        {
            all_brands.map((branding) => <Company
            company_logo={branding.photos}/>)
        }
    </div>
  )
}

export default Brands