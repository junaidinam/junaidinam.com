import { Component,AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    junaidImagePath: string;
    purpleLightsImagePath: string;
    blueLightsImagePath: string;

    logoImagePath: string;

    constructor(){
      this.junaidImagePath = '/assets/junaid2.png';
      this.purpleLightsImagePath = '/assets/purple.png';
      this.blueLightsImagePath = '/assets/blue.png';
      this.logoImagePath = '/assets/4.png';
    }

  ngAfterViewInit(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }
}
