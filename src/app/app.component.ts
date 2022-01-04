import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  showNav: boolean;
  ngOnInit(): void {
    this.checkLogin();
    console.log(window.location.pathname);
  }
  title = "quiz";
  checkLogin() {
    if (window.location.pathname == "/login") {
      this.showNav = false;
    } else {
      this.showNav = true;
    }
  }
}
