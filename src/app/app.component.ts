import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  images = ["./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg"
  ];
  imageIndex = 0;

  changeImage(sign : string) : void{
    if(sign == '-'){
      this.imageIndex = (this.images.length +  this.imageIndex - 1) % this.images.length;
    }
    else if(sign == '+')
    this.imageIndex = (this.images.length +  this.imageIndex + 1) % this.images.length;
    else
    this.imageIndex = parseInt(sign);
  }
}
