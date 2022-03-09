import { Component } from "@angular/core";
import { Form, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular Template Driven Form";
  users: any = [];

  loginUser(item: any) {
    this.users.push(item);
  }
  delete(i: number) {
    this.users.splice(i, 1);
  }
}
