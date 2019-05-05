import { Component, OnInit, Input } from '@angular/core';
import { challengeRating } from '../../data/challengeRating';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  constructor(private monstersService:MonstersService) { }

  monsters:object[] = []
  loaded:boolean = false
  // showMonsterList:boolean = false

  // @Input() playersXp:number
  @Input() set playersXp(playersXp:number){
    this.filterMonsters(playersXp)
  }
  @Input() showMonsterList:boolean = false

  ngOnInit() {
    console.log(this.playersXp)
    this.getMonsters();
  }

  getMonsters():void{
    this.monstersService.getMonsters()
      .subscribe(monsters => {
        this.monsters = [].concat(...monsters)
        this.monsters.forEach(monster => {
          monster.challenge_rating = challengeRating[monster.challenge_rating]
        })
        // this.monsters = this.monsters.filter(monster => monster.challenge_rating <= this.playersXP)
        this.loaded = true
      })
  }

  filterMonsters(xp):void{
    this.monsters = this.monsters.filter(monster => monster.challenge_rating <= xp)   
  }

}
