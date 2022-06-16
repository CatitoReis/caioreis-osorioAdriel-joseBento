import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlantasMedicinais } from '../models/plantas-medicinais';
@Injectable({providedIn:'root'})
export class PlantasMedicinaisService{
    baseUrl : String = environment.apiUrl;

    constructor(private httpClient:HttpClient){}



    buscarPlantasMedicinais(): Observable<PlantasMedicinais[]>{
        const url = `${this.baseUrl}/plantas-medicinais/`;
        return this.httpClient.get<PlantasMedicinais[]>(url);
    }

    adicionarPlantasMedicinal(planta: PlantasMedicinais): Observable<PlantasMedicinais>{
      const url = `${this.baseUrl}/plantas-medicinais/`;
      console.log(url, planta)
      return this.httpClient.post<PlantasMedicinais>(url,planta);
    }

    editarPlantasMedicinal(planta: PlantasMedicinais): Observable<PlantasMedicinais>{
      const url = `${this.baseUrl}/plantas-medicinais/${planta.id}/`;
      return this.httpClient.put<PlantasMedicinais>(url,planta);
    }

    excluirPlantasMedicinal(id: number): Observable<void>{
      const url = `${this.baseUrl}/plantas-medicinais/${id}/`;
      return this.httpClient.delete<void>(url);
    }
}
