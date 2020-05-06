import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
      },
      {
        path: 'employees',
        loadChildren: () => 
          import('../../modules/employees/employees.module').then(m => m.EmployeesModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
