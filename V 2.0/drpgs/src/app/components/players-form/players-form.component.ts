import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { XPTreshold } from '../../data/XPTreshold'

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.css']
})
export class PlayersFormComponent implements OnInit {

  players:number = 1;
  XP:number = undefined
  @Output() playersXP = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addPlayerField(){
    this.players++
  }

  calculateXP(form){
    let XP = 0;
    let numOfPlayers = 0;
    for(let i=0; i<10; i++){
      if(form[`player${i}`]){
        numOfPlayers += form[`player${i}`]
        XP += form[`player${i}`] * XPTreshold["level" + form[`level${i}`]][form.difficulty]
      }
    }
    this.playersXP.emit(XP)
  }

  onSubmit(f: NgForm) {
    this.calculateXP(f.value)
  }
}
