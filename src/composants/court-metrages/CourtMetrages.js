import React, { Component } from 'react'
import BoutonNav from '../../composants/boutonNav/BoutonNav'
import Miniature from '../miniature/Miniature';
import LecteurVideo from '../LecteurVideo/LecteurVideo';

import heros from '../../ASSETS/MINIATURE/heros.png'
import onimprovise from '../../ASSETS/MINIATURE/onimprovise.png'
import petitpas from '../../ASSETS/MINIATURE/petitpas.png'
import painchoco from '../../ASSETS/MINIATURE/painchoco.png'

export default class CourtMetrages extends Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
      }
      
    state = {
        BoutonClick: false,
        ToggleVideo: false,
        lienVideo: ['JUFMJFtx7sU', 'RUsXK9uTtms', '4q7tqpZ3WYw', 'zlT3O5uVtk0'],
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
                    <h1 className={`titre-accueil${this.state.BoutonClick? ' blur': ''}`} >Court-métrages</h1>
                    <span className={`separator${this.state.BoutonClick? ' blur': ''}`}></span>
                    <BoutonNav ClickOutside={this.handleClickOutside} Click={this.handleClick} Toggle={this.state.BoutonClick} />
                </div>
                <div className={`section-video${this.state.BoutonClick? ' blur': ''}`}>
                    <Miniature imgvideo={onimprovise} index='0' videoClick={this.handleVideo} />
                    <Miniature imgvideo={heros} index='1' videoClick={this.handleVideo} />
                    <Miniature imgvideo={painchoco} index='2' videoClick={this.handleVideo} />
                    <Miniature imgvideo={petitpas} index='3' videoClick={this.handleVideo} />
                </div>
                
            </div>
        )
    }
}
