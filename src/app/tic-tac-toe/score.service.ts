import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ScoreSheet} from './score-sheet/ScoreSheet';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  playerScores$: BehaviorSubject<ScoreSheet> = new BehaviorSubject(
    new ScoreSheet(0, 0)
  );

  publish(score: ScoreSheet) {
    this.playerScores$.next(score);
  }

  constructor() { }
}
