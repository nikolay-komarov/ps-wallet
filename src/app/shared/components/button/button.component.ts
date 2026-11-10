import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  readonly disabled = input<boolean>(false);
  readonly clicked = output<void>();

  handleClick(): void {
    this.clicked.emit();
  }
}
