import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeaberboardComponent } from "./leaberboard/leaberboard.component";
import { LoginComponent } from "./login/login.component";
import { QuizHomeComponent } from "./quiz-home/quiz-home.component";
import { QuizComponent } from "./quiz/quiz.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "instructions",
    component: QuizComponent,
  },
  {
    path: "quiz",
    component: QuizHomeComponent,
  },
  {
    path: "leaderBoard",
    component: LeaberboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
