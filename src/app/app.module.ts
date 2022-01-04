import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";

// Prime NgModule
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { QuizHomeComponent } from "./quiz-home/quiz-home.component";
import { LeaberboardComponent } from "./leaberboard/leaberboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    QuizHomeComponent,
    LeaberboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
