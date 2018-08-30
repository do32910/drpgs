import React, {Component} from 'react';
import monsterData from '../../data/monsters';
import Generated__display from '../Generated__display';

export default class Generated__monsterFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            xpSum: this.props.calculatedXP,
            monsterLevel: this.props.monsterChallengeRating,
            filteredMonsterList: null,
            monsterXP: this.props.monsterXP
        }
    }
    
    monsterFilter = () => {
        const filteredMonsters = monsterData.filter((item) => {
            return Number(item.challenge_rating) <= this.state.monsterLevel;
        })
        this.setState({
            filteredMonsterList: filteredMonsters
        });
    }
    
    
    componentWillMount(){
        this.monsterFilter();
        console.log(this.state.filteredMonsterList);
    }
    
    render(){
        // console.log("xpcalc: ", this.state.xpSum);
        // console.log("monlev: ", this.state.monsterLevel);
        return (
            <div>{this.state.filteredMonsterList != null && 
            <Generated__display monsterList={this.state.filteredMonsterList} playersXP={this.state.xpSum} monsterLevel={this.state.monsterLevel} monsterXP={this.state.monsterXP}/>}
            </div>
        );       
    }
}