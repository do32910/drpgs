import React, {Component} from 'react';
import {xpValues} from '../../data/XPChallengeRating';
import Generated__monsterFilter from '../Generated__monsterFilter';


export default class XPCalculation extends Component{
    constructor(props){
        super(props);
        this.state = {
            players: [],
            difficulty: "easy",
            xpValues: xpValues,
            monsterChallengeRating: null,
            monsterXP: null,
            calculatedXP: null
        }
    }

    reformatPlayersData = () => {
        let tmpPlayersArray = [];
        this.props.playersArray.forEach((item) => {
            for(let i=0; i<item.number; i++){
                tmpPlayersArray.push(item.level);
            }
        })
        return tmpPlayersArray;
    }
    
    playersXP = () => {
        let players = this.reformatPlayersData();
        let sum = 0;
        players.forEach((item) => {
            sum += this.state.xpValues[item];
        });

        this.monsterRating(sum);
    }

    monsterRating = (xpAfterCalculation) => {
        let maxMonsterRating = 0;
        let ratingConverted = 0;
        for(var prop in this.state.xpValues){
            if(maxMonsterRating < this.state.xpValues[prop] && this.state.xpValues[prop] < xpAfterCalculation){
                maxMonsterRating = this.state.xpValues[prop];
                ratingConverted = prop;
            }
        }
        this.setState({
            monsterChallengeRating: ratingConverted,
            monsterXP: maxMonsterRating,
            calculatedXP: xpAfterCalculation
        })

    }


    componentWillMount(){
        this.playersXP();  
    }

    render(){
        return (
            <div>
            {(this.state.monsterChallengeRating != null && 
            this.state.calculatedXP != null) && <Generated__monsterFilter calculatedXP={this.state.calculatedXP} monsterChallengeRating={this.state.monsterChallengeRating} monsterXP={this.state.monsterXP}/>}
            </div>
        )
    }
}
