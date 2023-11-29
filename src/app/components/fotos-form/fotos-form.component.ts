import { Component, OnInit} from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-fotos-form',
  templateUrl: './fotos-form.component.html',
  styleUrls: ['./fotos-form.component.css']
})
export class FotosFormComponent implements OnInit{

  file: File | null = null;
  fotoSelected: string | ArrayBuffer | null = null;

  constructor(private fotosService: FotosService, private router: Router) { }

  ngOnInit() {
    
  }

  onFotoSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.file = inputElement.files[0];
      // Imagen preview
      const reader = new FileReader();
      reader.onload = e => this.fotoSelected = reader.result as string;
      reader.readAsDataURL(this.file);
    }
  }

  subirFoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean {
    if (this.file) {
      this.fotosService.crearFoto(titulo.value, descripcion.value, this.file)
        .subscribe(res => {
          this.router.navigate(['/fotos'])
        }, err => console.log(err));
    }
    return false;
  }
}
