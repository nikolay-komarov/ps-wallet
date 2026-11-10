import { Component, input, model, output, signal } from '@angular/core';

const PASSWORD_VISIBILITY_ICONS = {
  visible: 'icons/eye-open.svg',
  hidden: 'icons/eye-closed.svg',
} as const;

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  standalone: true,
})
export class PasswordInputComponent {
  readonly placeholder = input.required<string>();
  readonly disabled = input<boolean>(false);
  readonly iconUrl = input<string | null>(null);
  readonly value = model<string>('');

  readonly passwordVisible = signal(false);
  readonly passwordVisibilityChange = output<boolean>();

  get visibilityIconUrl(): string {
    return this.passwordVisible()
      ? PASSWORD_VISIBILITY_ICONS.visible
      : PASSWORD_VISIBILITY_ICONS.hidden;
  }

  togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
    this.passwordVisibilityChange.emit(this.passwordVisible());
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
