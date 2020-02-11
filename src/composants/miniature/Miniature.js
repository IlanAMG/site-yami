import React from 'react'
import './Miniature.css'
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Miniature = ({ videoClick, imgvideo, index }) => (
          <div>
            <img onClick={() => videoClick(index)} className='imgvideo' src={imgvideo} alt='vidéo'/>
          </div>
        )

export default Miniature

