import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  title = 'ErgonPictures';
  photos: object[] = [];
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listUserPhoto('flavio').subscribe(photo => {
      photo.forEach(item => console.log(item.description));
      this.photos = photo;
    });
  }
}
