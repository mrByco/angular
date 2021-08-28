import { Injectable } from '@angular/core';
import {Add, Challenge} from "./challenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengeServiceService {

  constructor() { }

  public getChallenge(){
    return new Add();
  }

  public checkSolution(challenge: Challenge, testSolution: string): boolean{
    return challenge.getSolution().toLowerCase() == testSolution.toLowerCase()
  }
}
