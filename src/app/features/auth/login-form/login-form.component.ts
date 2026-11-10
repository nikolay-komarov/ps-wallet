import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: true,
  imports: [ButtonComponent, InputComponent, PasswordInputComponent],
})
export class LoginFormComponent {
  readonly email = signal('');
  readonly password = signal('');

  handleSubmit(): void {
    // TODO: реализовать отправку формы при подключении логики
  }
}
