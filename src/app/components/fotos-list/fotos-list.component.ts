import { Component, OnInit } from '@angular/core';

import { FotosService } from 'src/app/services/fotos.service';
import { Fotos } from 'src/app/models/Fotos';

@Component({
  selector: 'app-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css']
})
export class FotosListComponent implements OnInit{

  fotos: Fotos[] = [];

  constructor(private fotosService: FotosService) { }

  ngOnInit() {
    this.fotosService.getFotos().subscribe(
      res => {
        this.fotos = res;
      },
      err => console.log(err)
    )
  }
}
