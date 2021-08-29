import { Injectable } from '@angular/core';
import {Add, Challenge} from "./challenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor() { }

  public getChallenge(){
    return new Add();
  }
}
