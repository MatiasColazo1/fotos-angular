import { Component, OnInit} from '@angular/core';

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

  constructor() { }

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
}
