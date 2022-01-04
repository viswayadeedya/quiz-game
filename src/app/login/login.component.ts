import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userName: string;
  emailId: string;
  password: string;
  isLogin: boolean = true;
  text: string = "Login";
  text1: string = "SignUp";
  memberText: string = `Didn't have an account?`;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(["/instructions"]);
  }

  onClick() {
    this.isLogin = !this.isLogin;
    if (this.isLogin) {
      this.text = "Login";
      this.text1 = "SignUp";
      this.memberText = `Didn't have an account?`;
    } else {
      this.text = "SignUp";
      this.text1 = "Login";
      this.memberText = "Already have an account?";
    }
  }
}
