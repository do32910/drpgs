import React, { Component } from 'react';

export default class Generator__difficulty extends Component{
    render(){
        return (
            <div>
            Difficulty level:
            <input type="radio" name="difficultyLevel"/>
            <label>Easy</label>
            <input type="radio" name="difficultyLevel"/>
            <label>Medium</label>
            <input type="radio" name="difficultyLevel"/>
            <label>Hard</label>
            <br /><br />
            </div>
        );
    }
}