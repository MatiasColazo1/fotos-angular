import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Fotos } from '../models/Fotos';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  URI = 'http://localhost:3000/api/fotos'

  constructor(private http: HttpClient) { }

  crearFoto(titulo: string, descripcion: string, foto: File) {
    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('descripcion', descripcion);
    fd.append('imagen', foto);
    return this.http.post(this.URI, fd);
  }

  getFotos() {
    return this.http.get<Fotos[]>(this.URI)
  }

  getFoto(id: string) {
    return this.http.get<Fotos>(this.URI + '/' + id);
  }

  deleteFoto(id: string) {
    return this.http.delete(this.URI + '/' + id)
  }

  updateFoto(id: string, titulo: string, descripcion: string){
    return this.http.put(this.URI + '/' + id, {titulo, descripcion})
  }
}
