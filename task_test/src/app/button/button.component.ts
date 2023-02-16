import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color = '';
  @Input() newMessage = '';

  ngOnInit(): void {
    this.newMessage = 'Enter password:';
  }

  submitHandle() {
    Notify.success(this.newMessage);
  }
}
