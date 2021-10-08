import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  
  public cpf: string = ""; 
  public show: boolean = false;





  public listPessoas: Array<{nome: string, cpf: string, situacao:string, numeroContaAplica:string, numeroContaCorre:string}> = [
    {
      nome: "Luan de Almeida Pedrangelo", 
      cpf: "12392630909",
      situacao: "Irregular",
      numeroContaAplica: "06663-9",
      numeroContaCorre: "19990-3"
    },
    {
      nome: "Osvaldo Pereira Silva", 
      cpf: "19722961674",
      situacao: "Regular",
      numeroContaAplica: "04593-0",
      numeroContaCorre: "36148-4"
    },
    {
      nome: "Bruna", 
      cpf: "32185232199",
      situacao: "Irregular",
      numeroContaAplica: "09996-0",
      numeroContaCorre: "31855-1"
    }
  ]
  
  public valida(event:string){
    this.listPessoas.forEach(element => {
      if(event == element.cpf){
        this.show=true;
        console.log("Funciona EBAAA")
      }
    });
  }
  

  
 

  constructor() {}
  ngOnInit(): void {}
}
