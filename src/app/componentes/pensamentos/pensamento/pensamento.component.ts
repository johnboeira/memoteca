import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(
    private pensamentoService: PensamentoService
  ){}

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p'
  }

  ngOnInit(): void {
  }

  mudarIconeFavorito(): string {
    if(this.pensamento?.favorito == false){
      return 'inativo';
    }else{
      return 'ativo';
    }
  }

  atualizarFavorito(){
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe(() =>{
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento),1)
    });
  }
}
