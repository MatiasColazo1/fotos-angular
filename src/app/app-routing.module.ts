import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotosListComponent } from './components/fotos-list/fotos-list.component';
import { FotosFormComponent } from './components/fotos-form/fotos-form.component';
import { FotosPreviewComponent } from './components/fotos-preview/fotos-preview.component';

const routes: Routes = [
  {
    path: 'fotos',
    component: FotosListComponent
  },
  {
    path: 'fotos/nuevo',
    component: FotosFormComponent
  },
  {
    path: 'fotos/:id',
    component: FotosPreviewComponent
  },
  {
    path: '',
    redirectTo: '/fotos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
