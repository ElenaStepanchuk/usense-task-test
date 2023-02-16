import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  myForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  title: string = 'Enter password';

  inputPassword: string = '';

  currentColor2 = 'grey';
  currentColor3 = 'grey';
  currentColor = 'grey';

  currentMessage = 'Enter password:';

  addNewColor(pass: string) {
    const strongPassword: string =
      '(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
    const mediumPassword: string =
      '((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})|(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))';
    const easyPassword: string =
      '((?=.*[a-zA-Z])(?=.{8,})|(?=.*[0-9])(?=.{8,})|(?=.*[^A-Za-z0-9])(?=.{8,}))';

    this.inputPassword = pass;

    if (this.inputPassword === '') {
      this.currentColor = 'grey';
      this.currentColor2 = 'grey';
      this.currentColor3 = 'grey';
    } else if (this.inputPassword.match(strongPassword)) {
      this.currentColor = 'green';
      this.currentColor2 = 'green';
      this.currentColor3 = 'green';
      this.currentMessage = 'Strong!';
      return this.currentMessage;
    } else if (this.inputPassword.match(mediumPassword)) {
      this.currentColor = 'yellow';
      this.currentColor2 = 'yellow';
      this.currentColor3 = 'grey';
      this.currentMessage = 'Medium!';
      return this.currentMessage;
    } else if (this.inputPassword.match(easyPassword)) {
      this.currentColor = 'red';
      this.currentColor2 = 'grey';
      this.currentColor3 = 'grey';
      this.currentMessage = 'Easy!';
      return this.currentMessage;
    } else {
      this.currentColor = 'red';
      this.currentColor2 = 'red';
      this.currentColor3 = 'red';
      this.currentMessage = 'Enter password:';
      return this.currentMessage;
    }
    return;
  }
  onSubmit() {
    this.myForm.reset();
  }
}
