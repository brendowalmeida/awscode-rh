import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employees } from '../../models/employees.model';
import { EditEmployeeDialog } from './dialog/edit-employee.dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  
  @Input() employeeSelected: Employees;
  @Output() editEmployee = new EventEmitter<Employees>();

  public modalWidth: string = '400px';

  constructor(public editDialog: MatDialog) { }

  ngOnInit(): void { }

  edit() {
    const dialogRef = this.editDialog.open(EditEmployeeDialog, {
      width: this.modalWidth,
      data: { employee: this.employeeSelected }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data) {
        this.save(result.data);
      }
    });
  }
  
  save(employee: Employees) {
    this.editEmployee.emit(employee);
  }

}
