import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.actions';

import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  error: any;
  loading = false;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe( ({ user, error, loading }) => {
      this.usuario = user;
      this.error = error;
      this.loading = loading;
    });

    this.router.params.subscribe( ({ id }) => {

      this.store.dispatch( cargarUsuario({ id }) );

    });
  }

}
