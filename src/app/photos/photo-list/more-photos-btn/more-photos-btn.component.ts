import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-morephotos-btn',
  templateUrl: './more-photos-btn.component.html',
  styleUrls: ['./more-photos-btn.component.scss']
})
export class MorePhotosBtnComponent {
  @Input() hasPhoto: boolean;
}
