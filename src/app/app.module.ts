import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { PhotosRoutingModule } from './photos/photos.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModule, PhotosRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
