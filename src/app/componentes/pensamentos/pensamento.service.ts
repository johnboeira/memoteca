import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API: string = 'http://localhost:3000/pensamentos';

  constructor(private httpCliente: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.httpCliente.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.httpCliente.post<Pensamento>(this.API, pensamento);
  }

}
