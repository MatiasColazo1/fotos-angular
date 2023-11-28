import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FotosFormComponent } from './components/fotos-form/fotos-form.component';
import { FotosPreviewComponent } from './components/fotos-preview/fotos-preview.component';
import { FotosListComponent } from './components/fotos-list/fotos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FotosFormComponent,
    FotosPreviewComponent,
    FotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
