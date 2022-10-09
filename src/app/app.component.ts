import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uebung-app';

  hinweis1:boolean = false
  hinweis2:boolean = false

  hinweisAnzeigen(num:number){
    switch(num){
      case 1: 
        this.hinweis1 = true;
        break;
      case 2: 
        this.hinweis2 = true;
        break;
      default:
        break;
    }
  }

}
