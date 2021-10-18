import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showFiller = true;
  opened: boolean = true;
  public mostra: boolean = false;

  public setDado(event: any) {
    this.mostra = event;
  }


}
