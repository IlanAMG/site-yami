import React, { Component } from 'react'
import './LecteurVideo.css'

export default class LecteurVideo extends Component {
    
    render() {

        const source =`https://www.youtube.com/embed/${this.props.id}`

        return (
            <div className='container-video' onKeyPress={() => this.props.clockEscClick()} onClick={() => this.props.closeClick()}>
                <iframe  
                    title='film'
                    src={source}
                    frameBorder="0" 
                    allowFullScreen
                    ></iframe>
            </div>
        )
    }
}
