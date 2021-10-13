import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
