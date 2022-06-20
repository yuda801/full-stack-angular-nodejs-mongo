import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { OperationComponent } from './components/operation/operation.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mainRoute', component: MainComponent },
  { path: 'operationRoute', component: OperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
