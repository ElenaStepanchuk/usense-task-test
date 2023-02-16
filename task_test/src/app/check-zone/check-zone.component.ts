import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-zone',
  templateUrl: './check-zone.component.html',
  styleUrls: ['./check-zone.component.scss'],
})
export class CheckZoneComponent {
  @Input() color01 = '';
  @Input() color02 = '';
  @Input() color03 = '';
}
