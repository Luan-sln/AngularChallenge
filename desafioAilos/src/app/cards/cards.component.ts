import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public getDados: {nome: string, cpf: string, situacao:string, numeroContaAplica:string, numeroContaCorre:string} | undefined;
  public nomePessoa: string = "Luan Pedrangelo"
  public situacao: string ="Irregular"
  public tipoConta: string ="aplicação"
  public numConta: string ="557932-4"


 


  constructor() { }

  ngOnInit(): void {
  }

}
