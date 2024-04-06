import React from 'react'
import VideoCard from './VideoCard.js'
import "../styles/Video.css"

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item) => (
         <VideoCard key={item.key} image={item.image} name={item.name}/>
            ))
        }

    </div>
  )
}

export default Videos
