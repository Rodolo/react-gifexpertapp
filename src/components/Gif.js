import React from 'react'

const Gif = ({gif}) => {

  return (
      <div className="card animate__animated animate__fadeIn">
        <img src={gif.url} title={gif.title} alt={gif.title}/>
        <p>{gif.title}</p>
      </div>
  )
}


export default Gif;