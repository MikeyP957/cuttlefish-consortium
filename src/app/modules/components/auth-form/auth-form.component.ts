import { Component, Output, EventEmitter, ContentChild, AfterContentInit} from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { User } from 'src/app/models/User';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  constructor() { }

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();


  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
