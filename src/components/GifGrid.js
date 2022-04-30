import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import Gif from './Gif';


export const GifGrid = ({category}) => {

  const {images, loading} = useFetchGifs(category);

  return (
    <>
       <h1 className='animate__animated animate__fadeIn'>{category}</h1>
       {loading && <p className='animate__animated animate__flash'>Loading</p>}
       { <div className='card-grid'>

            {images.map(gif => {
                return <Gif key={gif.id} gif={gif}/>
            })}               
       </div> }
    </>
  )
}
