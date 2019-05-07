import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/Monster';
// import { log } from 'util';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-monster-party',
  templateUrl: './monster-party.component.html',
  styleUrls: ['./monster-party.component.css']
})
export class MonsterPartyComponent implements OnInit {

  playersXp:number = 0
  monstersXp:number = 0
  monsters:Monster[] = []

  constructor(private monstersService:MonstersService) { }

  ngOnInit() {
    this.monstersService.getSingleMonster("Aboleth")
      .subscribe(ako => console.log(ako))
  }

}
