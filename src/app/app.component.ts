import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ButtonComponent, InputComponent],
})
export class AppComponent {
  title = 'Wallet';

  email = signal('');
  blockedText = signal('');

  handleButtonClick(): void {
    console.log('button clicked');
  }

  handleEmailInput(value: string): void {
    console.log('email input:', value);
  }
}
