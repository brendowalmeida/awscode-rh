import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employees } from '../../models/employees.model';
import { CreateEmployeeDialog } from './dialog/create-employee.dialog';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  @Output() newEmployee = new EventEmitter<Employees>();

  public modalWidth: string = '400px';

  constructor(public createDialog: MatDialog) { }
  
  ngOnInit(): void { }

  create() {
    const dialogRef = this.createDialog.open(CreateEmployeeDialog, {
      width: this.modalWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data) {
        this.save(result.data);
      }
    });
  }
  
  save(employee: Employees) {
      this.newEmployee.emit(employee);
  }

}