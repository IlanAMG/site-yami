import React from 'react'
import './Miniature.css'
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Miniature = ({ videoClick, imgvideo, index }) => (
          <div>
            {!videoClick ?
              <a rel="noopener noreferrer" href='https://www.instagram.com/p/CAH9QtfFhDf/' target='_blank' ><img className='imgvideo' src={imgvideo} alt='vidéo'/></a>
              :
              <img onClick={() => videoClick(index)} className='imgvideo' src={imgvideo} alt='vidéo'/>
            }
          </div>
        )

export default Miniature

