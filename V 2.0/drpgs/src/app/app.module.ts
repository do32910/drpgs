import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersFormComponent } from './components/players-form/players-form.component';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MonsterPartyComponent } from './components/monster-party/monster-party.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { MonstersService } from './services/monsters.service';


const routes:Routes = [
  { path: 'party/:pxp/:mxp/:monsters', component: MonsterPartyComponent},
  { path: '', component: MainPageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PlayersFormComponent,
    MonstersComponent,
    MonsterPartyComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MonstersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
