import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Semente } from '../models/semente.model';

@Injectable({providedIn:'root'})
export class SementesService{
    baseUrl : String = environment.apiUrl;

    constructor(private httpClient:HttpClient){}



    buscarSementes(): Observable<Semente[]>{
        const url = `${this.baseUrl}/sementes/`;
        return this.httpClient.get<Semente[]>(url);
    }

    adicionarSemente(semente: Semente): Observable<Semente>{
      const url = `${this.baseUrl}/sementes/`;
      console.log(url, semente)
      return this.httpClient.post<Semente>(url,semente);
    }

    editarSemente(semente: Semente): Observable<Semente>{
      const url = `${this.baseUrl}/sementes/${semente.id}/`;
      return this.httpClient.put<Semente>(url,semente);
    }

    excluirSemente(id: number): Observable<void>{
      const url = `${this.baseUrl}/sementes/${id}/`;
      this.httpClient.delete<void>(url)
      return this.httpClient.delete<void>(url);
    }
}
