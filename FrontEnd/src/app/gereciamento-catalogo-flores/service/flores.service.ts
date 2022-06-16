import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { Flores } from "../models/flores";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class FloresService{
    baseUrl : String = environment.apiUrl;

    constructor(private httpClient:HttpClient){}



    buscarFlores(): Observable<Flores[]>{
        const url = `${this.baseUrl}/flores/`;
        return this.httpClient.get<Flores[]>(url);
    }

    adicionarFlor(flor: Flores): Observable<Flores>{
      const url = `${this.baseUrl}/flores/`;
      console.log(url, flor)
      return this.httpClient.post<Flores>(url,flor);
    }

    editarFlor(flor: Flores): Observable<Flores>{
      const url = `${this.baseUrl}/flores/${flor.id}/`;
      return this.httpClient.put<Flores>(url,flor);
    }

    excluirFlor(id: number): Observable<void>{
      const url = `${this.baseUrl}/flores/${id}/`;
      return this.httpClient.delete<void>(url);
    }
}
