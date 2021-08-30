import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../../services/challenge-service/challenge.service";
import {Challenge, checkChallengeSolution} from "../../services/challenge-service/challenge";
import {timeout} from "rxjs/operators";


@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.css']
})
export class ChallengerComponent {

  public currentChallenge: Challenge;
  currentUserSolution: string = "";
  public checkTimer?: any;
  public checkTime: number = 8;

  constructor(public challengeService: ChallengeService) {
    this.currentChallenge = this.challengeService.getChallenge();
    this.loadChallenge();
    console.log(this.currentChallenge.getText());
  }

  public loadChallenge() {
    this.currentUserSolution = "";
    this.currentChallenge = this.challengeService.getChallenge();
    this.checkTime = 8;
    this.checkTimer = setInterval(() => {
      if (this.checkTime < 1){
        this.checkChallenge();
      }else {
        this.checkTime -= 1;
      }
    }, 1000);

  }

  checkChallenge() {
    clearInterval(this.checkTimer);
    let challengeAccepted = checkChallengeSolution(this.currentChallenge, this.currentUserSolution);
    if (this.currentChallenge.firstCheck) this.challengeService.adjustLevel(challengeAccepted);
    this.currentChallenge.firstCheck = false;
    if (challengeAccepted) {
      this.loadChallenge();
    }
  }

}
