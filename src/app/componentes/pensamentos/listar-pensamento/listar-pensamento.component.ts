import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  apenasFavoritos: boolean = false;

  listaFavoritos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.apenasFavoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro, this.apenasFavoritos).subscribe(listaPensamento => {
      this.listaPensamentos.push(...listaPensamento);
      if(!listaPensamento.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.apenasFavoritos)
      .subscribe(listaPensamento => {
        this.listaPensamentos = listaPensamento;
      })
  }

  listarFavoritos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.apenasFavoritos = true;

    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.apenasFavoritos)
    .subscribe(listaPensamentoFavoritos => {
      this.listaPensamentos = listaPensamentoFavoritos;
      this.listaFavoritos = listaPensamentoFavoritos;
    })
  }

}
