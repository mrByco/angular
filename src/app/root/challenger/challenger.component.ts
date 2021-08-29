import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../services/challenge-service/challenge.service";
import {Challenge, checkChallengeSolution} from "../../services/challenge-service/challenge";


@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.css']
})
export class ChallengerComponent {

  public currentChallenge: Challenge;
  currentUserSolution: string = "";

  constructor(private challengeService: ChallengeService) {
    console.log("adsadsad")
    this.currentChallenge = this.challengeService.getChallenge();
    console.log(this.currentChallenge.getText());
  }

  public loadChallenge() {
    this.currentUserSolution = "";
    this.currentChallenge = this.challengeService.getChallenge();
  }

  checkChallenge() {
    if (checkChallengeSolution(this.currentChallenge, this.currentUserSolution)){
      this.loadChallenge();
    }
  }
}
