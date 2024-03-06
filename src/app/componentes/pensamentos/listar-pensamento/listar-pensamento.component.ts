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

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual).subscribe(listaPensamento => {
      this.listaPensamentos.push(...listaPensamento);
      if(!listaPensamento.length){
        this.haMaisPensamentos = false;
      }
    })
  }

}
