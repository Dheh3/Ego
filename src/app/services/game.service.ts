import { Injectable } from '@angular/core';
import { Character,Ego } from '../models/character';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private Ego: Ego = new Ego('Ego',100,['key'],10)

  constructor() { }

  getCharacterName(){
    return this.Ego.name;
  }
}
