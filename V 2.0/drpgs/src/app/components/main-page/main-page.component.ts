import { Component, OnInit } from '@angular/core';
import { PlayersFormComponent } from './.../components/players-form/players-form.component';
import { MonstersComponent } from '../../components/monsters/monsters.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  title = 'drpgs';
  playersXp = undefined

  constructor() { }

  ngOnInit() {
  }

  onXPSubmit(xp){
    this.playersXp = xp
  }
}
