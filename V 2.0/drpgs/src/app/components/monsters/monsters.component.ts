import { Component, OnInit, Input } from '@angular/core';
import { challengeRating } from '../../data/challengeRating';
import { MonstersService } from '../../services/monsters.service';
import { Monster } from '../../models/Monster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})

export class MonstersComponent implements OnInit {

  constructor(private monstersService:MonstersService, private router:Router) { }

  monsters:Monster[] = []
  loaded:boolean = false
  _playersXp = ''
  monstersXp = 0

  @Input() set playersXp(playersXp:string){
    this.filterMonsters(playersXp)
    this._playersXp = playersXp
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
          monster.amountInParty = 0
        })
        // this.monsters = this.monsters.filter(monster => monster.challenge_rating <= this.playersXP)
        this.loaded = true
      })
  }

  filterMonsters(xp):void{
    this.monsters = this.monsters.filter(monster => monster.challenge_rating <= xp)   
  }

  calculateMonstersXp(monster:Monster, action:string){
    if(action === "add"){
      this.monstersXp = this.monstersXp + monster.challenge_rating
      monster.amountInParty++
    }if(action === "subtract"){
      this.monstersXp = this.monstersXp - monster.challenge_rating
      monster.amountInParty--
    }if(action === "removeAll"){
      this.monstersXp = this.monstersXp - (monster.challenge_rating * monster.amountInParty)
      monster.amountInParty = 0
    }
  }

  saveParty(){
    const names = this.monsters.filter(monster => monster.amountInParty > 0).map(monster => monster.name).join("&")
    this.router.navigate([`/party/${this._playersXp}/${this.monstersXp}/${names}`])    
  }

}
