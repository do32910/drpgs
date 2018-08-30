import React, { Component } from 'react';
import Generator__numOfPlayers from '../Generator__numOfPlayers';
import './Generator.css';
import {Button} from 'reactstrap';
import XPCalculation from '../XPCalculation';

export default class Generator extends Component{
    constructor(props){
        super(props);
        this.state= {
            loadData: false,
            players: []
        }
    }
    
    generateEncounter = (e) => {
        e.preventDefault();
        this.setState({
            loadData: true
        })

    }
    
    handleUserInputChange = (playersDataFromChild) => {
        this.setState({
            players: playersDataFromChild
        })
        // document.getElementById("generatorFom").
    }
    
    render(){
        return (
            <div id="main-container">
                <form id="generator-form" className={this.state.loadData ? 'hidden' : 'generatorForm'}>
                    <h1 className="logo">DRPGS</h1>
                    <h2>A simple tool to make creating random encounters in d&d a little less painful!</h2>
                    <Generator__numOfPlayers getPlayersData={this.handleUserInputChange}/>
                    <br /><br />
                    <Button onClick={this.generateEncounter} color="warning" className="generate-encounter-btn">Generate encounter</Button>{' '}
                </form>

                {this.state.loadData==true && <XPCalculation playersArray={this.state.players}/>}        
            </div>
        )
    }
}