import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/Monster';
import { ActivatedRoute } from '@angular/router';
import { MonstersService } from '../../services/monsters.service';
import { challengeRating } from '../../data/challengeRating';

@Component({
  selector: 'app-monster-party',
  templateUrl: './monster-party.component.html',
  styleUrls: ['./monster-party.component.css']
})
export class MonsterPartyComponent implements OnInit {

  playersXp:number = undefined
  monstersXp:number = undefined
  monsters:Monster[] = []
  loaded:boolean = false
  challengeRating = challengeRating
  constructor(private monstersService:MonstersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.monstersXp= +this.route.snapshot.paramMap.get('mxp')
    this.playersXp= +this.route.snapshot.paramMap.get('pxp')
    const paramMmonsters = this.route.snapshot.paramMap.get('monsters')
    var monsterNames = paramMmonsters.split("&")
    let counter = monsterNames.length
    monsterNames.forEach(monster => {
      this.monstersService.getSingleMonster(monster)
        .subscribe(response => {
          this.monsters.push(response[0]); 
          counter--
          if(counter === 0){
            this.loaded = true
          }
        })
    }, function(){
      counter--
      
    })
  }

}
