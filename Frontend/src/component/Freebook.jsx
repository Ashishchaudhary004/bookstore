import React from 'react'
import Card from './Card'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
function freebook() {
    const filterdata=list.filter((item)=>item.catgory==="Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl mx-auto md:px-20'>
        <div>
          <h1 className='font-semibold text-2xl my-16 pb-2 text-orange-600 max-[640px]:text-center'>Free Available book</h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, suscipit.</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterdata.map((data)=>(
              <Card data={data} key={data.id}/>
            ))}
          </Slider>
        </div>
    </div>
    </>
  )
}

export default freebook
