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
  @Output() public enviaDados = new EventEmitter;
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
      nome: "Bruna Formentin", 
      cpf: "132.461.229-03",
      situacao: "Irregular",
      numeroContaAplica: "09996-0",
      numeroContaCorre: "31855-1"
    },
    {
      nome: "Giliarde Hausmmann", 
      cpf: "117.420.599-70",
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
        this.enviaDados.emit(item);
        break;
      } 
      else{
        this.valida = false;
      }
    }
  }

  
 

  constructor() {}
  ngOnInit(): void {}
}
