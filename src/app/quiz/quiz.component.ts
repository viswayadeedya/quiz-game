import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
})
export class QuizComponent implements OnInit {
  checked: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  startQuiz() {
    this.router.navigate(["/quiz"]);
  }
}
