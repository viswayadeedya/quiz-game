import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class QuizQuestionsService {
  constructor(private http: HttpClient) {}
  getQuizSports() {
    return this.http.get(
      "https://quiz-game-e5246-default-rtdb.firebaseio.com/sports.json"
    );
  }
  getQuizMovies() {
    return this.http.get(
      "https://quiz-game-e5246-default-rtdb.firebaseio.com/movies.json"
    );
  }
  postScore(data) {
    return this.http.post(
      "https://quiz-game-e5246-default-rtdb.firebaseio.com/scores.json",
      data
    );
  }
  getScore() {
    return this.http.get(
      "https://quiz-game-e5246-default-rtdb.firebaseio.com/scores.json"
    );
  }
}
