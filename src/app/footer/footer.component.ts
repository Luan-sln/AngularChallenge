import { Component, Input, OnInit } from '@angular/core';
import { TelaCadastroComponent } from '../tela-cadastro/tela-cadastro.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() public mostraBtn:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
