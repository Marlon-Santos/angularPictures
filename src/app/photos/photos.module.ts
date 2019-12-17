import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { FilterPhotosPipe } from './photo-list/filterPhotos.pipe';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { MorePhotosBtnComponent } from './photo-list/more-photos-btn/more-photos-btn.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    FilterPhotosPipe,
    PhotosComponent,
    MorePhotosBtnComponent
  ],
  imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {}
