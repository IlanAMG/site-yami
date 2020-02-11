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
                    <p className='contact'>0606060606<br/>gmail@gmail.com<br/>PARIS</p>
                    <span className={`separator-profil${this.state.BoutonClick? ' blur': ''}`}></span>
                    <p className='text'>    
Grand adepte des histoires et du dessins, j'étais généralement le dessinateur du fond de la classe.
Adolescent, j'obtiens ma première caméra pour filmer des kickflips au skatepark. Je démarre le cadrage et le montage.
Après le bac, je me lasse rapidement de la classe préparatoire économique aux grandes écoles. Je trouves une équipe et commence à faire mes premiers court métrage.
<br/>J'intègre plus tard une école de cinéma, directement admis en deuxième années grâce à mes acquis.
Nouveau matériel en main, nouvelles compétences, je commence les prestations vidéo rémunérées.<br/><br/>

Aujourd'hui j'écris, réalise, cadre et/ou monte différents projets tout en gardant la même passion qui me guidait au skatepark.
                    </p>
                </div>
            </div>
            </div>
        )
    }
}