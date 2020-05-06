import { Component, OnInit } from '@angular/core';
import { Employees } from './models/employees.model';
import { IConfirmDeleteDialog } from 'src/app/shared/interfaces/confirm.delete.interface';
import { EmployeesService } from 'src/app/shared/mock/employees.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialog } from 'src/app/shared/dialogs/confirm-dialog/confirm-delete-dialog';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public modalWidth: string = '600px';
  public search: string = '';
  public listEmployees: Array<Employees> = new Array<Employees>();
  public dataConfirmDelete: IConfirmDeleteDialog;

  constructor(
    private employeesService: EmployeesService,
    private translate: TranslateService,
    private toastr: ToastrService,
    public confirmDeleteDialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.listEmployees = this.employeesService.get();
  }

  addEmployee(employee: Employees) {
    if(employee && employee.id) {
      this.toastr.success(this.translate.instant('EMPLOYEES.SUCCESS.MSG'), this.translate.instant('EMPLOYEES.SUCCESS.TITLE'));
      this.listEmployees.push(employee);
    }
  }

  editEmployee(employee: Employees) {
    if(employee && employee.id) {
      let emp = this.listEmployees.filter((x => x.id === employee.id));
      if(emp && emp.length > 0) {
        emp[0] = employee;
        this.toastr.success(this.translate.instant('EMPLOYEES.SUCCESS.MSG'), this.translate.instant('EMPLOYEES.SUCCESS.TITLE'));
      } else {
        this.toastr.error(this.translate.instant('EMPLOYEES.ERROR.NOT_FOUND'), this.translate.instant('EMPLOYEES.ERROR.TITLE'));
      }
    }
  }

  deleteEmployee(employeeSelected: Employees) {

    this.dataConfirmDelete = {
      id: employeeSelected.id,
      name: employeeSelected.name
    }

    const dialogRef = this.confirmDeleteDialog.open(ConfirmDeleteDialog, {
      width: this.modalWidth,
      data: { info: this.dataConfirmDelete }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data) {
        this.delete(result.data);
      }
    });
  }

  delete(data) {
    if(data && data.id) {
      this.listEmployees = this.listEmployees.filter(x => x.id !== data.id);
      this.toastr.success(this.translate.instant('EMPLOYEES.SUCCESS.MSG'), this.translate.instant('EMPLOYEES.SUCCESS.TITLE'));
    } else {
      this.toastr.error(this.translate.instant('EMPLOYEES.ERROR.NOT_FOUND'), this.translate.instant('EMPLOYEES.ERROR.TITLE'));
    }
  }

}
