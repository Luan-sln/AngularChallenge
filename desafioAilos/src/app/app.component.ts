import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafioAilos';
  public getDados:{nome: string, cpf: string, situacao:string, numeroContaAplica:string, numeroContaCorre:string} | undefined;

  public setDados(event:any){
    this.getDados = event;
  }
  private filtro: string= "0";
  
}
