import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Usuario } from '../models/usuario.model';

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  ad: Ad;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }


  getUser() {

    return this.http.get( `${ this.url }/users?per_page=6` )
    .pipe(
      map( (resp: UsersResponse ) => resp.data )
    );

  }

}
