import React, { Component, Fragment } from 'react'
import Nav from '../nav/Nav'
import './BoutonNav.css'

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
                <label 
                    className={`bouton-nav${this.props.Toggle? '-active': ''}`} 
                    onClick={() => this.props.Click()}>
                    &#9776;
                </label>

                    {this.props.Toggle ? <Nav /> : null}
            </Fragment>
        )
    }
}
