import React, { Component } from 'react'
import BoutonNav from '../../composants/boutonNav/BoutonNav'
import LecteurVideo from '../LecteurVideo/LecteurVideo';
import Miniature from '../miniature/Miniature';
import apachery from '../../ASSETS/MINIATURE/apachery.png'

export default class Pubs extends Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
      }
      
    state = {
        BoutonClick: false,
        ToggleVideo: false,
        lienVideo: ['eTfdQVOQa7o'],
        activeVideo: null
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
                    <h1 className={`titre-accueil${this.state.BoutonClick? ' blur': ''}`} >Promotionnel</h1>
                    <span className={`separator${this.state.BoutonClick? ' blur': ''}`}></span>
                    <BoutonNav Click={this.handleClick} Toggle={this.state.BoutonClick}/>
                </div>
                <div className={`section-video${this.state.BoutonClick? ' blur': ''}`}>
                    <Miniature imgvideo={apachery} index='0' videoClick={this.handleVideo} />
                </div>
            </div>
        )
    }
}