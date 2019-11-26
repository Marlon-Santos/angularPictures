import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'localhost:3000';
@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listUserPhoto(user: string) {
    return this.http.get<Photo[]>(`http://${API}/${user}/photos`);
  }
}
