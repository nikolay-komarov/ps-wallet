import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
})
export class InputComponent {
  readonly type = input<'text' | 'email'>('text');
  readonly placeholder = input.required<string>();
  readonly disabled = input<boolean>(false);
  readonly iconUrl = input<string | null>(null);
  readonly value = model<string>('');

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
