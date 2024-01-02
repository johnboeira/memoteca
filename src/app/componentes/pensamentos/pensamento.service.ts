import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API: string = 'http://localhost:3000/pensamentos';

  constructor(private httpCliente: HttpClient) { }

  listar(){
    return this.httpCliente.get<Pensamento[]>(this.API);
  }

}
