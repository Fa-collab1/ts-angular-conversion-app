import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-picture-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-show.component.html',
  styleUrl: './picture-show.component.scss'
})
export class PictureShowComponent {

  name = `Picture Show Component`;
  url = URLS[0];
  toLoad = true;
  timeStamp = '';
  index = 0;

  toggle() {
    this.toLoad = false;
    this.index = (this.index + 1) % URLS.length;
    this.url = URLS[this.index];
    this.toLoad = true;
  }

  loaded(event:any) {
    console.log('loaded', event);
    this.timeStamp = event.timeStamp;
  }
}

const URLS = [
'/assets/cheatsheet.png',
'/assets/apple1.webp',
'/assets/apple2.webp',
'/assets/eternal.webp',
'/assets/eternal2.webp',
'/assets/houses.webp',
'/assets/man.webp',
'/assets/man2.webp',
'/assets/sweden.webp',


];

