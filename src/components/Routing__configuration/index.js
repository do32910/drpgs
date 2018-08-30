import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Generator from '../Generator';
import MonsterPage from '../MonsterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Routing__configuration extends Component{

    generateMonsterLinks = (amount) => {
        let linkIds = [];
        for(let i=1; i<=amount; i++){
            linkIds.push(i);
        }
        return linkIds
    };

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Generator} />
                    {/* {
                        this.generateMonsterLinks(325).map((i) => {
                            return <NavLink to={`/monster/${i}`} component={MonsterPage}>{i}</NavLink>
                        })

                    } */}
                    <Route path="/monster/:monsterId" component={MonsterPage}/>
                </div>
            </BrowserRouter>
        )
    }
}