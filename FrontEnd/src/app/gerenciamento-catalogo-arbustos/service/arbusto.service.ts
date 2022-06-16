import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Arbusto } from '../models/arbusto';
@Injectable({providedIn:'root'})
export class ArbustosService{
    baseUrl : String = environment.apiUrl;

    constructor(private httpClient:HttpClient){}



    buscarArbustos(): Observable<Arbusto[]>{
        const url = `${this.baseUrl}/arbustos/`;
        return this.httpClient.get<Arbusto[]>(url);
    }

    adicionarArbusto(arbusto: Arbusto): Observable<Arbusto>{
      const url = `${this.baseUrl}/arbustos/`;
      console.log(url, arbusto)
      return this.httpClient.post<Arbusto>(url,arbusto);
    }

    editarArbusto(arbusto: Arbusto): Observable<Arbusto>{
      const url = `${this.baseUrl}/arbustos/${arbusto.id}/`;
      return this.httpClient.put<Arbusto>(url,arbusto);
    }

    excluirArbusto(id: number): Observable<void>{
      const url = `${this.baseUrl}/arbustos/${id}/`;
      return this.httpClient.delete<void>(url);
    }
}
