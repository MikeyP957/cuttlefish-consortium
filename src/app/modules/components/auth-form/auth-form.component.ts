import {
  Component,
  Output,
  Renderer2 as Renderer,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ElementRef,
} from "@angular/core";
import { AuthRememberComponent } from "../auth-remember/auth-remember.component";
import { AuthMessageComponent } from "../auth-message/auth-message.component";
import { User } from "src/app/models/User";

@Component({
  selector: "auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.sass"],
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  constructor(private renderer: Renderer) {}

  @ViewChild("email") email: ElementRef;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterViewInit(): void {
    this.renderer.setAttribute(
      this.email.nativeElement,
      "placeholder",
      "enter your email address"
    );
    this.renderer.addClass(this.email.nativeElement, "email");

    /** 
    this.email.nativeElement.setAttribute('placeholder', 'Enter your email address')
    this.email.nativeElement.classList.add('email')
    this.email.nativeElement.focus();
    */
  }

  ngAfterContentInit() {
    console.log(this.email);
    if (this.message) {
      this.message.days = 30;
    }

    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => {
          this.showMessage = checked;
        });
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
