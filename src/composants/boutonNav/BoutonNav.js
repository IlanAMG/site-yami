import React, { Component, Fragment } from 'react'
import Nav from '../nav/Nav'
import './BoutonNav.css'
import rubrique from '../../ASSETS/rubrique.png'
import rubriquecouleur from '../../ASSETS/rubriquecouleur.png'

export default class BoutonNav extends Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
      }
      escFunction(event){
        if(event.keyCode === 27 && this.state.ToggleVideo) {
            this.setState(state => ({
                ToggleVideo: state.ToggleVideo === false
              }));
        }
    }  


    render() {
    
        return (
            <Fragment>
                {this.props.Toggle? 
                <img className='bouton-nav-active'
                src={rubriquecouleur} alt='' onClick={() => this.props.Click()}/> : 
                <img className='bouton-nav'
                src={rubrique} alt='' onClick={() => this.props.Click()}/> }
                {this.props.Toggle ? <Nav /> : null}
            </Fragment>
        )
    }
}