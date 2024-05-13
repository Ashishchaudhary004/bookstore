import React from 'react'

function Card({data}) {
  return (
    <>
    <div>
        <div className="card w-74 size-81 m-4 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
            <figure><img src={data.Image} alt="book"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.name}
                <div className="badge badge-secondary">{data.catgory}</div>
                </h2>
                <p className='justify-normal text-sm '>{data.title}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">${data.price}</div> 
                    <div className="badge badge-outline hover:bg-pink-600 hover:text-white">Buy Now</div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Card
