import React, { Component } from 'react'
import './Miniature.css'

export default class Miniature extends Component {

   render(){
        return (
          <div>
            <img onClick={() => this.props.videoClick(this.props.index)} className='imgvideo' src={this.props.imgvideo} alt='vidéo'/>
          </div>
        )
    }
}
