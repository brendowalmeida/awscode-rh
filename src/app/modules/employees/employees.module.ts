import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { EmployeesRoutingModule } from './employees-routing.module';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxCurrencyModule } from "ngx-currency";
import { CreateEmployeeDialog } from './components/create-employee/dialog/create-employee.dialog';
import { EditEmployeeDialog } from './components/edit-employee/dialog/edit-employee.dialog';
import { ToastrService } from 'ngx-toastr';

import { EmployeesService } from 'src/app/shared/mock/employees.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeesComponent,
    CreateEmployeeDialog,
    EditEmployeeDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    TranslateModule.forChild(),
    ToastrModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxCurrencyModule,
    SharedModule
  ],
  providers: [
    EmployeesService,
    MatDatepickerModule,
    ToastrService
  ]
})
export class EmployeesModule { }
