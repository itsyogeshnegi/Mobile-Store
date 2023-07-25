import React from 'react'
import Product from './Product'
import './Sales.css'
function Sales() {

    var sub_product = [
        {   
            id:0,
            images:'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81yL2dXKTHL._SX679_.jpg',
            nameof:"Samsung Galaxy M53 5G",
            price:'₹23,999',
            tag:true

        },

        { 
            id:1 ,
            images:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/31pX5GtVlAL._SX300_SY300_QL70_FMwebp_.jpg",
            nameof:"Samsung Galaxy Z Flip4 5G",
            price:"₹97,998"
        },
        { 
            id:2 ,
            images:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41FqG3cHV9L._SY445_SX342_QL70_FMwebp_.jpg",
            nameof:"Apple iPhone 11",
            price:"₹41,990",
            tag:true

        },
        { 
            id:3,
            images:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61cwywLZR-L._SX679_.jpg",
            nameof:"iPhone 14 128GB Midnight",
            price:"₹79,900"
        },
        { 
            id:4,
            images:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61XO4bORHUL._SX679_.jpg",
            nameof:"iPhone 14 Pro 1TB Space",
            price:"₹1,79,900",
            tag:true
        },
        { 
            id:5,
            images:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41R9oD3K25L._SX300_SY300_QL70_FMwebp_.jpg",
            nameof:"OnePlus Nord CE 2 5G",
            price:"₹24,999"
        },
        { 
            id:6,
            images:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41o3CoW58tL._SX300_SY300_QL70_FMwebp_.jpg",
            nameof:"OnePlus 10R 5G",
            price:"	₹34,999"
        },
        { 
            id:7,
            images:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71XKAnxCsLL._SX679_.jpg",
            nameof:"OnePlus 10T 5",
            price:"₹55,999",
            tag:true
        },
        { 
            id:8,
            images:"https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg",
            nameof:"Samsung Galaxy S20 FE 5G",
            price:"₹34,999",
            tag:true
        },
        { 
            id:9,
            images:"https://m.media-amazon.com/images/I/91cFxYoou8L._SX679_.jpg",
            nameof:"realme narzo 60 Pro ",
            price:" ₹23,999"
        },
        { 
            id:10,
            images:"https://m.media-amazon.com/images/I/71qjUzUt+ML._SX679_.jpg",
            nameof:"OnePlus 11R 5G",
            price:"₹39,999",
            tag:true
        },
        { 
            id:10,
            images:"https://m.media-amazon.com/images/I/71lYm08fIZL._SX679_.jpg",
            nameof:"(Renewed) Xiaomi 12 Pro | 5G",
            price:"₹39,999",
            tag:true
        },
    ]

  return (
    <div className='background_wrok'>

        {
            sub_product.map((products) => <Product 
            item__photo={products.images} 
            item__name={products.nameof} 
            item__value={products.price} 
            item__tag={products.tag}/>)
        }

    </div>
  )
}

export default Sales