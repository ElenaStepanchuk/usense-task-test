import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  myForm: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
  });

  title: string = 'Enter password';

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

    if (pass === '') {
      this.currentColor = 'grey';
      this.currentColor2 = 'grey';
      this.currentColor3 = 'grey';
    } else if (pass.match(strongPassword)) {
      this.currentColor = 'green';
      this.currentColor2 = 'green';
      this.currentColor3 = 'green';
      this.currentMessage = 'Strong!';
    } else if (pass.match(mediumPassword)) {
      this.currentColor = 'yellow';
      this.currentColor2 = 'yellow';
      this.currentColor3 = 'grey';
      this.currentMessage = 'Medium!';
    } else if (pass.match(easyPassword)) {
      this.currentColor = 'red';
      this.currentColor2 = 'grey';
      this.currentColor3 = 'grey';
      this.currentMessage = 'Easy!';
    } else {
      this.currentColor = 'red';
      this.currentColor2 = 'red';
      this.currentColor3 = 'red';
      this.currentMessage = 'Enter password:';
    }
    return;
  }
  onSubmit() {
    this.myForm.reset();
  }
}
