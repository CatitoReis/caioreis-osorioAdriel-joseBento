import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Arvore } from '../models/arvore';
@Injectable({providedIn:'root'})
export class ArvoreService{
    baseUrl : String = environment.apiUrl;

    constructor(private httpClient:HttpClient){}



    buscarArvores(): Observable<Arvore[]>{
        const url = `${this.baseUrl}/arvores/`;
        return this.httpClient.get<Arvore[]>(url);
    }

    adicionarArvore(arvore: Arvore): Observable<Arvore>{
      const url = `${this.baseUrl}/arvores/`;
      console.log(url, arvore)
      return this.httpClient.post<Arvore>(url,arvore);
    }

    editarArvore(arvore: Arvore): Observable<Arvore>{
      const url = `${this.baseUrl}/arvores/${arvore.id}/`;
      return this.httpClient.put<Arvore>(url,arvore);
    }

    excluirArvore(id: number): Observable<void>{
      const url = `${this.baseUrl}/arvores/${id}/`;
      return this.httpClient.delete<void>(url);
    }
}
