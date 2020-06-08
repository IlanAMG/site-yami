import React, { Component } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import CMt from '../../ASSETS/CM/CMt.png'
import CLIPt from '../../ASSETS/CLIP/CLIPt.png'
import PUBt from '../../ASSETS/PUB/PUBt.png'
import BDt from '../../ASSETS/BD/BDt.png'
import APPt from '../../ASSETS/APROPOS/APPt.png' 

export default class Nav extends Component {
    state = {
        index: null,
        animationActive: false,
    }

    handleOver = (i) => {
        
        this.setState(state => ({
            index: i,
          }))
        }

    handleOut = () => (
        this.setState(state => ({
            index: null,
          }))
    )
    componentDidMount() {
        this.setState(state => ({
            animationActive: true
          }))
    }

    render() {
        
        return (
            
            <div className='wrapper'>
                <div className='nav-flex'>
                    <div className="nav">
                        <div 
                            
                            onMouseOut={this.handleOut} onMouseOver={() => this.handleOver(1)} 
                            className={`section-courtmetrages${this.state.index === 1 ? '-color': ''}`}
                            style={{
                                animationName: this.state.animationActive === true ? 'slide1' : '', 
                                animationDuration: this.state.animationActive === true ? '1500ms' : ''
                                }}
                            >
                            <Link to="/courtsmetrages"><img className="nav-text" alt='cmt' src={CMt}/></Link>
                        </div>
                        <div 
                            
                            onMouseOut={this.handleOut} onMouseOver={() => this.handleOver(2)} 
                            className={`section-clips${this.state.index === 2 ? '-color': ''}`}
                            style={{
                                animationName: this.state.animationActive === true ? 'slide2' : '', 
                                animationDuration: this.state.animationActive === true ? '1500ms' : ''
                                }}
                            >
                            <Link to="/clips"><img className="nav-text" alt='cmt' src={CLIPt}/></Link>
                        </div>
                        <div 
                            
                            onMouseOut={this.handleOut} onMouseOver={() => this.handleOver(3)} 
                            className={`section-publicités${this.state.index === 3 ? '-color': ''}`}
                            style={{
                                animationName: this.state.animationActive === true ? 'slide1' : '', 
                                animationDuration: this.state.animationActive === true ? '1500ms' : ''
                                }}
                            >
                            <Link to="/animations"><img className="nav-text" alt='cmt' src={PUBt}/></Link>  
                        </div>
                        <div 
                            
                            onMouseOut={this.handleOut} onMouseOver={() => this.handleOver(4)} 
                            className={`section-dessins${this.state.index === 4 ? '-color': ''}`}
                            style={{
                                animationName: this.state.animationActive === true ? 'slide2' : '', 
                                animationDuration: this.state.animationActive === true ? '1500ms' : ''
                                }}
                            >
                            <Link to="/dessins"><img className="nav-text" alt='cmt' src={BDt}/></Link>
                        </div>
                        <div 
                            
                            onMouseOut={this.handleOut} onMouseOver={() => this.handleOver(5)} 
                            className={`section-apropos${this.state.index === 5 ? '-color': ''}`}
                            style={{
                                animationName: this.state.animationActive === true ? 'slide1' : '', 
                                animationDuration: this.state.animationActive === true ? '1500ms' : ''
                                }}
                            >
                            <Link to="/apropos"><img className="nav-text" alt='cmt' src={APPt}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
