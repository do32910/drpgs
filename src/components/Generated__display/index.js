import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Generated__display.css';
import {xpValues} from '../../data/XPChallengeRating';

export default class Generated__display extends Component{
    constructor(props){
        super(props);
        this.state = {
            monsterList: this.props.monsterList,
            playersXP: this.props.playersXP,
            monsterLevel: this.props.monsterLevel,
            monsterXP: 0
        }
    }

    addMonsterToEncounter(e, challenge_rating, index){
        let selectedMonster = document.querySelector(`#container-${index}`);
        let containerBool = (selectedMonster.dataset.clicked === 'true');
        if(containerBool == false){
            let ratingInXP = xpValues[challenge_rating];
            let monsterXP = this.state.monsterXP + Number(ratingInXP);
            this.setState({
                monsterXP: monsterXP
            });
            selectedMonster.setAttribute('data-clicked', 'true');
        }else{
            let ratingInXP = xpValues[challenge_rating];
            let monsterXP = this.state.monsterXP - Number(ratingInXP);
            this.setState({
                monsterXP: monsterXP
            });
            selectedMonster.setAttribute('data-clicked', 'false');
        }
    }

    render(){
        const generatedDisplay = this.state.monsterList.map((item, index)=>{
            return (
                <div key={item.name.toLowerCase()}>
                <Container id={`container-${index}`} onClick={(e) => this.addMonsterToEncounter(e, item.challenge_rating, index)}  data-clicked={`false`}>
                <Row className="monster-name">
                    <h1>{item.name}</h1>
                </Row>
                <Row>
                    <Col><span>AC:</span>{item.armor_class}</Col>
                    <Col><span>HP:</span>{item.hit_points}</Col>
                    <Col><span>Hit Dice</span>{item.hit_dice}</Col>
                    <Col><span>Speed:</span>{item.speed}</Col>
                    <Col><span>Difficulty:</span>{item.challenge_rating}</Col>
                </Row>
                <Row>
                    <Col><span>strength:</span> {item.strength}</Col>
                    <Col><span>dexterity:</span> {item.dexterity}</Col>
                    <Col><span>constitution:</span> {item.constitution}</Col>
                    <Col><span>intelligence:</span> {item.intelligence}</Col>
                    <Col><span>wisdom:</span> {item.wisdom}</Col>
                    <Col><span>charisma:</span> {item.charism}</Col>
                </Row>
                {item.actions != null && item.actions.map((item) => {
                    return (
                        <div>
                        <Row><h3>{item.name}</h3></Row>
                        <Row>{item.desc}</Row>
                        </div>
                    );
                })};
            </Container>
            </div>
            );
        });
        return (
            <div>
            <Card body className="text-center">
                <CardTitle>Player's XP: {this.state.playersXP}</CardTitle>
                <CardText>Total monsters' XP: {this.state.monsterXP}</CardText>
          </Card>
            <div>{generatedDisplay}</div>
            </div>
        );
    }
}