import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ErgonPictures";
  photos = [
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDUJKHpJLOsJ110MmawBB389dthgYkHkbtflaiV6dnT3hww6dG",
      description: "testando1"
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDUJKHpJLOsJ110MmawBB389dthgYkHkbtflaiV6dnT3hww6dG",
      description: "testando5"
    }
  ];
  constructor(http: HttpClient) {
    console.log(http);
  }
}
