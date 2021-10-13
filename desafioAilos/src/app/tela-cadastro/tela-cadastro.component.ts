import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  
  public cpf:string = ""; 
  public show:boolean = false;
  public valida:boolean = true;


  public listPessoas: Array<{nome: string, cpf: string, situacao:string, numeroContaAplica:string, numeroContaCorre:string}> = [
    {
      nome: "Luan de Almeida Pedrangelo", 
      cpf: "123.926.309-09",
      situacao: "Irregular",
      numeroContaAplica: "06663-9",
      numeroContaCorre: "19990-3"
    },
    {
      nome: "Osvaldo Pereira Silva", 
      cpf: "197.229.616-74",
      situacao: "Regular",
      numeroContaAplica: "04593-0",
      numeroContaCorre: "36148-4"
    },
    {
      nome: "Bruna", 
      cpf: "321.852.321-99",
      situacao: "Irregular",
      numeroContaAplica: "09996-0",
      numeroContaCorre: "31855-1"
    }
  ]
  
  public confereCpf(event:string){
    for(let item of this.listPessoas){
      if(item.cpf == event){
        this.show=true;
        this.valida = true;
        console.log("Funciona EBAAA")
        break;
      } 
      else{
        this.valida= false;
      }
      console.log(event);
    }
  }

  
 

  constructor() {}
  ngOnInit(): void {}
}
