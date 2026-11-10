import { Component } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ButtonComponent],
})
export class AppComponent {
  title = 'Wallet';

  handleButtonClick(): void {
    console.log('button clicked');
  }
}
