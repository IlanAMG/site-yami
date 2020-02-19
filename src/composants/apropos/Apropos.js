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
Mon premier montage vidéo a été une compilation de descentes de rampe sur une luge improvisée avec des séparateurs de voie en plastique. <i>– 2012</i><br/>
Quand je tombais au skatepark avec la caméra dans les mains elle s’en sortait toujours indemne, à l’instar de mes autres membres. <i>– 2013</i><br/> 
J’ai tourné mon premier court métrage avec un micro perche éteint et sans script. <i>– 2014</i><br/>
Le premier scénario que j’ai écrit devait aboutir à un court métrage de 20 minutes. Après une première version d’une heure et pas mal de cuts, j’avais un moyen métrage de 40 minutes apparemment « drôle et regardable ». <i>– 2016</i><br/>
Faire un court métrage avec des enfants m’a fait comprendre pourquoi ils sont parfois meilleur acteur que les adultes. <i>– 2019</i><br/>
Ma madeleine de Proust : « Le Château dans le ciel » d’Hayao Miyazaki.
                    </p>
                </div>
            </div>
            </div>
        )
    }
}
