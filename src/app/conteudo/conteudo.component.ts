import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 0;
  @Output() public mostra = new EventEmitter;

  public getDados: {nome: string, cpf: string, situacao:string, numeroContaAplica:string, numeroContaCorre:string} | undefined;

  public setDados(event:any){
    this.getDados = event;
    this.mostra.emit(true);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
