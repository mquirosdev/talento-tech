import { Injectable } from '@angular/core';
/* Importar HttpClient */
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient){}

  /* Función para traer el listado de usuarios */
  getUsers(){
    return this.http.get<any[]>('users.json');    
    // return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  
}
