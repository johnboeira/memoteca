import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API: string = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) { }

  listar(pagina: number): Observable<Pensamento[]>{
    const itensPorPagina: number = 6;

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    return this.httpClient.get<Pensamento[]>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.httpClient.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: number){
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Pensamento>(url);
  }

  selecionarPorId(id: number){
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento){
    const url = `${this.API}/${pensamento.id}`;
    return this.httpClient.put<Pensamento>(url, pensamento);
  }

}
