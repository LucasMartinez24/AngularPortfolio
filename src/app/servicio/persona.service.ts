import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../clase/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url:string="http://localhost:8080/api/persona";
  constructor(private http:HttpClient) { }

  get():Observable<Persona>{
    return this.http.get<Persona>(this.url);
  }
  create(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url,persona);
  }
  delete(id:number):Observable<Persona>{
    return this.http.delete<Persona>(this.url+'/'+id);
  }
}
