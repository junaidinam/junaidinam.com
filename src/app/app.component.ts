import { Component,AfterViewInit, Renderer2} from '@angular/core';
import * as Parallax from 'parallax-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


    constructor(private renderer: Renderer2){
      
    }

  ngAfterViewInit(){
    // for menu bar scroll
    this.renderer.setAttribute(document.body,"data-spy","scroll");
    this.renderer.setAttribute(document.body,"data-target",".navbar");
    this.renderer.setAttribute(document.body,"data-offset","50");
  }
}

