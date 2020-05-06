import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShellComponent } from './shell.component';
import { EmployeesModule } from 'src/app/modules/employees/employees.module';


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule
  ]
})
export class ShellModule { }
