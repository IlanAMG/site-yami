import React, { Component } from 'react'
import BoutonNav from '../../composants/boutonNav/BoutonNav'
import './Dessins.css'

export default class Dessins extends Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
      }
      escFunction(event){
        if(event.keyCode === 27 && this.state.BoutonClick) {
            this.setState(state => ({
                BoutonClick: state.BoutonClick === false
              }));
        }
    }
    state = {
        BoutonClick: false
    }

    handleClick = () => {
        this.setState(state => ({
            BoutonClick: !state.BoutonClick
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
                    <h1 className={`titre-accueil${this.state.BoutonClick? ' blur': ''}`} >Dessins</h1>
                    <span className={`separator${this.state.BoutonClick? ' blur': ''}`}></span>
                    <BoutonNav Click={this.handleClick} Toggle={this.state.BoutonClick}/>
                </div>
                <div className={`section-bd${this.state.BoutonClick? ' blur': ''}`}>
                <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                <div>
                    <iframe title='insta' src="https://cdn.lightwidget.com/widgets/52b2fbe5880d5c71b4e2dcc3d08931c2.html" scrolling="no" allowtransparency="true" className="lightwidget-widget"></iframe>
                </div>
                </div>
            </div>
        )
    }
}
