import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Monsters extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.monsterId,
            name: "",
            AC: null,
            HP: null,
            hitDice: null,
            speed: "",
            challengeRating: null,
            stats: {
                strength: null,
                dexterity: null,
                constitution: null,
                intelligence: null,
                wisdom: null,
                charisma: null
            },
            actions: [],
            damageImmunities: [],
            damageVulnerabilities: [],
            damageResistances: [],
            conditionImmunities: [],
            perception: null,
            passivePerception: null,
            languages: []
        }
    }

    componentDidMount(){
        fetch(`http://dnd5eapi.co/api/monsters/${this.state.id}/`)
            .then((data) => data.json())
            .then(retrievedData => {
                let actionsArray = retrievedData.actions;
                actionsArray = actionsArray.map((item) => {
                    return {description: item.desc, name: item.name};
                });
                this.setState({
                    name: retrievedData.name,
                    AC: retrievedData.armor_class,
                    HP: retrievedData.hit_points,
                    hitDice: retrievedData.hit_dice,
                    speed: retrievedData.speed,
                    challengeRating: retrievedData.challenge_rating,
                    stats: {
                        ...this.state.stats,
                        strength: retrievedData.strength,
                        dexterity: retrievedData.dexterity,
                        constitution: retrievedData.constitution,
                        intelligence: retrievedData.intelligence,
                        wisdom: retrievedData.wisdom,
                        charisma:retrievedData.charisma
                    },
                    actions: actionsArray
                });
            });
    }
    
    render(){
        return (
            <Container>
                <Row className="monster-name">
                    <h1>{this.state.name}</h1>
                </Row>
                <Row>
                    <Col><span>AC:</span>{this.state.AC}</Col>
                    <Col><span>HP:</span>{this.state.HP}</Col>
                    <Col><span>Hit Dice</span>{this.state.hitDice}</Col>
                    <Col><span>Speed:</span>{this.state.speed}</Col>
                    <Col><span>Difficulty:</span>{this.state.challengeRating}</Col>
                </Row>
                <Row>
                    <Col><span>strength:</span> {this.state.stats.strength}</Col>
                    <Col><span>dexterity:</span> {this.state.stats.dexterity}</Col>
                    <Col><span>constitution:</span> {this.state.stats.constitution}</Col>
                    <Col><span>intelligence:</span> {this.state.stats.intelligence}</Col>
                    <Col><span>wisdom:</span> {this.state.stats.wisdom}</Col>
                    <Col><span>charisma:</span> {this.state.stats.charism}</Col>
                </Row>
                {this.state.actions.map((item) => {
                    return (
                        <div>
                        <Row><h3>{item.name}</h3></Row>
                        <Row>{item.description}</Row>
                        </div>
                    );
                })};
            </Container>
        )
    }
}