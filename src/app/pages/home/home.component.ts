import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { PictureShowComponent } from '../../picture-show/picture-show.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, PictureShowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
 

})




export class HomeComponent {

}
