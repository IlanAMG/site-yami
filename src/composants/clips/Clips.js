import React, { Component } from 'react'
import BoutonNav from '../../composants/boutonNav/BoutonNav'    
import Miniature from '../miniature/Miniature'
import LecteurVideo from '../LecteurVideo/LecteurVideo'

import believe from '../../ASSETS/MINIATURE/believe.png'
import lookaway from '../../ASSETS/MINIATURE/lookaway.png'
import palante from '../../ASSETS/MINIATURE/palante.png'

export default class Clips extends Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
      }
      escFunction(event){
        if(event.keyCode === 27 && this.state.ToggleVideo) {
            this.setState(state => ({
                ToggleVideo: state.ToggleVideo === false,
                activeVideo: null
              }));
        }
        if(event.keyCode === 27 && this.state.BoutonClick) {
            this.setState(state => ({
                BoutonClick: state.BoutonClick === false
              }));
        }
    }   

    state = {
        BoutonClick: false,
        ToggleVideo: false,
        lienVideo: ['yz8Aap_1jFU', '9D1RGS1ZzgY','f9FJ9sL0cI4'],
        activeVideo: null
    }

    handleClick = () => {
        this.setState(state => ({
            BoutonClick: !state.BoutonClick
          }));
    }

    handleVideo = (i) => {
        this.setState(state => ({
            ToggleVideo: !state.ToggleVideo,
            activeVideo: state.lienVideo[i]
          }));
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
      }

    render() {
        return (
            <div>
                <div className="fond-accueil">
                {this.state.ToggleVideo ? <LecteurVideo 
                                            closeEscPress={this.escFunction} 
                                            closeClick={this.handleVideo}
                                            id={this.state.activeVideo}
                                            /> : null}
                    <h1 className={`titre-accueil${this.state.BoutonClick? ' blur': ''}`} >Clips</h1>
                    <span className={`separator${this.state.BoutonClick? ' blur': ''}`}></span>
                    <BoutonNav Click={this.handleClick} Toggle={this.state.BoutonClick}/>
                </div>
                <div className={`section-video${this.state.BoutonClick? ' blur': ''}`}>
                    <Miniature imgvideo={believe} index='0' videoClick={this.handleVideo} />
                    <Miniature imgvideo={lookaway} index='1' videoClick={this.handleVideo} />
                    <Miniature imgvideo={palante} index='2' videoClick={this.handleVideo} />
                </div>
            </div>
        )
    }
}
