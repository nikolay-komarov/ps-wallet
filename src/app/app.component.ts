import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent],
})
export class AppComponent {
  title = 'Wallet';

  email = signal('');
  password = signal('');
  blockedText = signal('');

  handleButtonClick(): void {
    console.log('button clicked');
  }

  handleEmailInput(value: string): void {
    console.log('email input:', value);
  }

  handlePasswordInput(value: string): void {
    console.log('password input:', value);
  }

  handlePasswordVisibilityChange(visible: boolean): void {
    console.log('password visible:', visible);
  }
}
