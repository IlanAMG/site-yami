import React, { Component } from 'react'
import BoutonNav from '../../composants/boutonNav/BoutonNav'
import photoprofil from '../../ASSETS/photoprofil.png'
import './Apropos.css'

export default class Apropos extends Component {
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
                <div>
                <div className="fond-accueil">
                    <h1 className={`titre-accueil${this.state.BoutonClick? ' blur': ''}`} >À propos</h1>
                    <span className={`separator${this.state.BoutonClick? ' blur': ''}`}></span>
                    <BoutonNav Click={this.handleClick} Toggle={this.state.BoutonClick}/>
                </div>
                <div className={`section${this.state.BoutonClick? ' blur': ''}`}>
                    <img className='profil' src={photoprofil} alt='profil'/>
                    <p className='contact'>0675282090<br/>yamiquinton@hotmail.fr<br/>PARIS</p>
                    <span className={`separator-profil${this.state.BoutonClick? ' blur': ''}`}></span>
                    <p className='text'>    
                    Bien que la comédie (surtout absurde) me plaise beaucoup, je préfère le drame.<br/><br/>
 
 Mes trois projets principaux (deux courts et un long) que je développe à temps plein parlent de faits sociétaux. Les trois parlent de l'humain caché derrière un métier dont nous avons une mauvaise image. Par exemple, mon projet de long métrage "L'étincelle" met le doigt sur des problèmes au sein de l'Éducation Nationale.<br/><br/> 
 
 Peut être suis-je trop empathique? Ou alors peut-être que je cherche simplement à lever le voile sur des idées reçues pour qu'on se comprennent les uns et les autres?<br/><br/>
 
 Quand j'écris, je vais voir ces personnes et j'écoutes leurs histoires. Leurs retours sur mes scénarios sont très important à mes yeux.<br/> 
 Entre fiction et documentaire, je compose des récits avec des faits qui nous entourent.<br/><br/>
 
 Je travailles également sur d'autres projets : film d'animation (long), comédies, thriller,  court métrage interactif... Je prend un grand plaisir à mêler passion et rigueur de travail."
                    </p>
                </div>
            </div>
            </div>
        )
    }
}
