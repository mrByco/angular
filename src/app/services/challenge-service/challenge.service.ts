import { Injectable } from '@angular/core';
import {Add, Challenge} from "./challenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  get currentLevel(): number {
    return this._currentLevel;
  }
  private _currentLevel = 1;

  constructor() { }

  public getChallenge(){
    return new Add(this._currentLevel);
  }

  public adjustLevel(known: boolean){
    this._currentLevel *= known ? 1.05 : 0.95;
  }
}
