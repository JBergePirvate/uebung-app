import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';

const routes: Routes = [
  {path:'personen', component: ListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
