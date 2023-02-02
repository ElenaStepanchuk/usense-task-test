import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  title: string = 'Enter password';
  value: string = '';
  color1: string = '';
  color2: string = '';
  color3: string = '';
  message: string = '';

  ngOnInit(): void {
    this.color1 = 'grey';
    this.color2 = 'grey';
    this.color3 = 'grey';
    this.value = '';
    this.message = 'Enter password:';
  }
  submitHandle() {
    if (this.value === '' || this.value.length <= 7) {
      Notify.failure('Password not correct, enter wrong password!');
    } else {
      this.color1 = 'grey';
      this.color2 = 'grey';
      this.color3 = 'grey';
      this.value = '';
      Notify.success(this.message);
      this.message = 'Enter password:';
    }
    return;
  }

  changeInputHandler() {
    console.log(this.value);
    console.log(this.value.length);

    let strongPassword: any =
      '(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
    let mediumPassword: any =
      '((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})|(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))';
    let easyPassword: any =
      '((?=.*[a-zA-Z])(?=.{8,})|(?=.*[0-9])(?=.{8,})|(?=.*[^A-Za-z0-9])(?=.{8,}))';
    let password: string = this.value;

    if (password.match(strongPassword)) {
      this.color1 = 'green';
      this.color2 = 'green';
      this.color3 = 'green';
      let status = (this.message = 'Strong!');
      return status;
    } else if (password.match(mediumPassword)) {
      this.color1 = 'yellow';
      this.color2 = 'yellow';
      this.color3 = 'grey';
      let status = (this.message = 'Medium!');
      return status;
    } else if (password.match(easyPassword)) {
      this.color1 = 'red';
      this.color2 = 'grey';
      this.color3 = 'grey';
      let status = (this.message = 'Easy!');
      return status;
    } else {
      this.color1 = 'red';
      this.color2 = 'red';
      this.color3 = 'red';
    }
    return;
  }
}
