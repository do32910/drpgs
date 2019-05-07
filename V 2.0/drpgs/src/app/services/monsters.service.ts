import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Monster } from '../models/Monster';

@Injectable({
  providedIn: 'root'
})

export class MonstersService {

  private apiUrl = "https://api-beta.open5e.com/monsters"

  constructor(
    private http:HttpClient
  ) { }

  getMonsters():Observable<any>{
    let resp1 = this.http.get(`${this.apiUrl}/?page=1`)
      .pipe(
        map(data => (data as any).results)
      )
    let resp2 = this.http.get(`${this.apiUrl}/?page=2`)
      .pipe(
        map(data => (data as any).results)
      )
      return forkJoin([resp1, resp2])
  }

  getSingleMonster(monsterName):Observable<any>{
    return this.http.get(`${this.apiUrl}/?name=${monsterName}`)
      .pipe(
        map(data => (data as any).results)
      )
  }
}