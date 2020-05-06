import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.less']
})
export class ScoreSheetComponent implements OnInit {
  playerScores$ = this.scoreService.playerScores$;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit() {
  }

}
