import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosService } from 'src/app/services/fotos.service';
import { Fotos } from 'src/app/models/Fotos';

@Component({
  selector: 'app-fotos-preview',
  templateUrl: './fotos-preview.component.html',
  styleUrls: ['./fotos-preview.component.css']
})
export class FotosPreviewComponent implements OnInit {

  id: string = '';
  foto: Fotos | any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private fotosService: FotosService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.fotosService.getFoto(this.id)
      .subscribe(
        res => {
          this.foto = res;
        },
        err => console.log(err)
      )
    })
  }

  deleteFoto(id: string){
    this.fotosService.deleteFoto(id)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/fotos'])
      },
      err => console.log(err)
    )
  }

  updateFoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean {
    this.fotosService.updateFoto(this.id, titulo.value, descripcion.value )
    .subscribe(
      res => {
        this.router.navigate(['/fotos'])
      },
      err => console.log(err)
    )
    return false;
  }
}
