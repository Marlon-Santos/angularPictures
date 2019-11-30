import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterPhotos' })
export class FilterPhotosPipe implements PipeTransform {
  transform(photos: Photo[], filter: string) {
    if (filter) {
      const photosFilter = photos.filter(photo => {
        return photo.description
          .toLowerCase()
          .includes(filter.trim().toLowerCase());
      });
      return photosFilter;
    } else {
      return photos;
    }
  }
}
