import { Component, OnInit } from "@angular/core";
import { QuizQuestionsService } from "../quiz-api/quiz-questions.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-leaberboard",
  templateUrl: "./leaberboard.component.html",
  styleUrls: ["./leaberboard.component.scss"],
})
export class LeaberboardComponent implements OnInit {
  scores: any;
  constructor(private quizService: QuizQuestionsService) {}

  ngOnInit(): void {
    this.getScores();
  }

  getScores() {
    this.scores = [];
    this.quizService
      .getScore()
      .pipe(
        map((res) => {
          for (const key in res) {
            this.scores.push({ ...res[key] });
          }
          return this.scores;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
