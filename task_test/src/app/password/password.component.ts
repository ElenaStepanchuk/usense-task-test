import {
  Component,
  Output,
  Input,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent implements ControlValueAccessor {
  @Output() newInputPassword = new EventEmitter<string>();
  @Input() newMessage = '';

  addNewPassword(value: string) {
    this.newInputPassword.emit(value);
  }

  onChange!: (value: string) => void;
  onTouched!: () => void;

  value: string = '';
  color1: string = 'grey';
  color2: string = 'grey';
  color3: string = 'grey';

  onInputValueChange(event: Event): void {
    const strongPassword: string =
      '(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
    const mediumPassword: string =
      '((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})|(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))';
    const easyPassword: string =
      '((?=.*[a-zA-Z])(?=.{8,})|(?=.*[0-9])(?=.{8,})|(?=.*[^A-Za-z0-9])(?=.{8,}))';

    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;
    this.onChange(value);

    if (value === '') {
      this.color1 = 'grey';
      this.color2 = 'grey';
      this.color3 = 'grey';
    } else if (value.match(strongPassword)) {
      this.color1 = 'green';
      this.color2 = 'green';
      this.color3 = 'green';
    } else if (value.match(mediumPassword)) {
      this.color1 = 'yellow';
      this.color2 = 'yellow';
      this.color3 = 'grey';
    } else if (value.match(easyPassword)) {
      this.color1 = 'red';
      this.color2 = 'grey';
      this.color3 = 'grey';
    } else {
      this.color1 = 'red';
      this.color2 = 'red';
      this.color3 = 'red';
    }
    return;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onChange = fn;
  }
}
