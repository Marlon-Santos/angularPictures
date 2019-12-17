import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: object[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  hasPhoto = true;
  userName = this.activatedRoute.snapshot.params.userName;
  page = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoservice: PhotoService
  ) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(400))
      .subscribe(filter => (this.filter = filter));
  }

  loadPhoto(): void {
    this.photoservice
      .listUserPhotoPaginated(this.userName, ++this.page)
      .subscribe(photo => {
        if (photo.length <= 12) {
          this.hasPhoto = false;
        }
        return (this.photos = [...this.photos, ...photo]);
      });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
