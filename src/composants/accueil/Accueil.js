import React from 'react'
import Nav from '../nav/Nav'
import './Accueil.css';

export default function Accueil() {
    return (
        <div>
            <div className="fond-accueil">
                <h1 className="titre-accueil">Yami Quinton</h1>
                <span className="separator"></span> 
                <Nav />   
            </div>
            
        </div>
    )
}
