import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pensamento } from '../pensamento';

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
}
