import React, { Component } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Label,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import './Generator__numOfPlayers.css';

export default class Generator__numOfPlayers extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentNumOfPlayers: "",
            currentPlayersLevel: "",
            players: [],
            areInputsDisplayed: true,
            areAnyInputValues: false
        }
    }
    
    handleAmountInputChange = (event) => {
        this.setState({currentNumOfPlayers: event.target.value});
    };
    
    handleLevelInputChange = (event) => {
        this.setState({currentPlayersLevel: event.target.value});
    };
    
    addPlayers = (e) => {
        // this.validatePlayerInput();
        let playersArray = this.state.players;
        playersArray.push({number: this.state.currentNumOfPlayers,
           level: this.state.currentPlayersLevel});
        this.setState({
            players: playersArray,
            areAnyInputValues: true
        });
        this.sendPlayersToParentComponent();
    }

    validatePlayerInput(e){
        let numOfPlayersRegex = /^[1-9]$|^1[0-9]$/;
        let levelRegex = /^[1-9]$|^1[0-9]$|^20$/;
        if(this.state.currentNumOfPlayers == null || !this.state.currentNumOfPlayers.match(numOfPlayersRegex)){
            alert("Oops, that can't be right! Please enter a correct amount of players");
            this.setState({
                currentNumOfPlayers: null
            })
            return 0;
        }if(this.state.currentPlayersLevel == null || !this.state.currentPlayersLevel.match(levelRegex)){
            alert("Oops, that can't be right! Please enter a correct level");
            this.setState({
                currentPlayersLevel: null
            })
            return 0;  
        }else{
            this.addPlayers(e);
        }
    }

    removePlayers = (e, index) => {
        e.preventDefault();
        let playersArray = this.state.players;
        let filteredPlayersArray = playersArray.filter((item,key) => {
            return key !== index;
        });
        this.setState({
            players: filteredPlayersArray
        })
        this.sendPlayersToParentComponent();
    }

    displayUserInputValues = () => {
        return (this.state.areAnyInputValues === true  ? (
            <ul className="players-list">
                {this.state.players.map((item, index) => {
                    return (
                        <li key={index} className="player-info">
                        <span>{item.level} players on level {item.number}</span>
                        <button onClick={(e)=> this.removePlayers(e, index)}>-</button>
                        </li>
                    )
                })}
            </ul>
        ) : null );
    }

    displayInputs = () => {
        return (
            <div>
            <InputGroup>
            <Input className="generator-form-input" placeholder="Enter the Players' level" onChange={this.handleLevelInputChange} value={this.state.playersLevel}/>
            <Input  className="generator-form-input" placeholder="Enter the amount of Players" onChange={this.handleAmountInputChange} value={this.state.numOfPlayers}/>
            <InputGroupAddon addonType="append"><Button color="secondary" className="players-number-btn" onClick={e => this.validatePlayerInput(e)}>+</Button></InputGroupAddon>            
            </InputGroup>
            <br />
            <Label>Enter the amount of players in your group and their level! <br />
            If the players are on varying levels, don't worry, you can add more after clicking the plus button :)</Label> 
            </div>
        )
    }
    
    sendPlayersToParentComponent = () => {
        this.props.getPlayersData(this.state.players);
    }
    
    render() {
        return (
            <div>
                {this.displayInputs()}
                {this.displayUserInputValues()}
            </div>
        );
    }
}