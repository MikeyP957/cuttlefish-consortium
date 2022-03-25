import { Component } from "@angular/core";

import { User } from "./models/User";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  title = "cuttlefish-consortium";
  rememberMe = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
  createUser(user: User) {
    console.log("create account: ", user);
  }

  loginUser(user: User) {
    console.log("login user: ", user);
  }
}
