import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  titulo: string = 'Meu Mural';

  listaFavoritos: Pensamento[] = [];

  constructor(private router: Router,
    private pensamentoService: PensamentoService) { }

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
    this.titulo = 'Meus Favoritos';
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.apenasFavoritos = true;

    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.apenasFavoritos)
    .subscribe(listaPensamentoFavoritos => {
      this.listaPensamentos = listaPensamentoFavoritos;
      this.listaFavoritos = listaPensamentoFavoritos;
    })
  }

  recarregarComponente() {
    this.apenasFavoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

}
