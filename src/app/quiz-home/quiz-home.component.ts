import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuizQuestionsService } from "../quiz-api/quiz-questions.service";

interface Question {
  question: string;
  correct: string;
  options: string[] | boolean[];
}

@Component({
  selector: "app-quiz-home",
  templateUrl: "./quiz-home.component.html",
  styleUrls: ["./quiz-home.component.scss"],
})
export class QuizHomeComponent implements OnInit {
  questions: Question[];
  enable: boolean = false;
  i: number = 0;
  score: number = 0;
  constructor(
    private quizService: QuizQuestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getQuizQuestions();
  }

  checkAns(e, a?) {
    this.enable = true;
    console.log(this.questions[this.i].correct);
    if (e === this.questions[this.i].correct) {
      a.classList.add("correct");
      this.score = 10 + this.score;
    } else {
      a.classList.add("wrong");
    }
  }
  correctCheck(a, b, c, d) {
    if (a.innerText === this.questions[this.i].correct) {
      a.classList.add("correct");
    }
    if (b.innerText === this.questions[this.i].correct) {
      a.classList.add("correct");
    }
    if (c.innerText === this.questions[this.i].correct) {
      a.classList.add("correct");
    }
    if (d.innerText === this.questions[this.i].correct) {
      a.classList.add("correct");
    }
  }

  nextQuestion(a, b, c, d) {
    this.enable = false;
    a.classList.remove("correct");
    a.classList.remove("wrong");
    b.classList.remove("correct");
    b.classList.remove("wrong");
    c.classList.remove("correct");
    c.classList.remove("wrong");
    d.classList.remove("correct");
    d.classList.remove("wrong");
    if (this.i <= 4) {
      this.i = this.i + 1;
    }
    if (this.i === 4) {
      this.quizService
        .postScore({ userName: "Person 1", score: this.score })
        .subscribe((res) => {
          // console.log(res);
        });
      this.router.navigate(["/leaderBoard"]);
    }
  }

  getQuizQuestions() {
    this.score = 0;
    this.i = 0;
    this.questions = [];
    let options = [];
    this.quizService.getQuizSports().subscribe((data: any) => {
      data["-MsaW8Drae2X6ERcD0pX"].map((res) => {
        this.questions.push({
          question: res.question,
          correct: res.correct,
          options: res.options,
        });
      });
    });
  }
}
