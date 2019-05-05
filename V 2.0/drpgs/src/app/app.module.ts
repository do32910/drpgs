import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayersFormComponent } from './components/players-form/players-form.component';
import { MonstersComponent } from './components/monsters/monsters.component';

import { MonstersService } from './services/monsters.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersFormComponent,
    MonstersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MonstersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
