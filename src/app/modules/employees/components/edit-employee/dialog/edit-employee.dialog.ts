import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { Employees } from '../../../models/employees.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-edit-employee',
    templateUrl: './edit-employee.dialog.html',
    styleUrls: ['./edit-employee.dialog.scss']
})
export class EditEmployeeDialog {

    public editForm: FormGroup;
    public maxDate: Date;
    public employee: Employees = new Employees();

    constructor(
        public dialogRef: MatDialogRef<EditEmployeeDialog>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private formBuilder: FormBuilder
    ) {
        this.employee = data.employee;
        this.buildForm();
        this.setData();
    }

    get f() { return this.editForm.controls; }

    buildForm() {
        this.editForm = this.formBuilder.group({
            name: ['', Validators.required],
            office: ['', Validators.required],
            dateBirth: ['', Validators.required],
            salary: ['', Validators.required]
        });
        
        this.editForm.setValue({
            name: this.employee.name,
            office: this.employee.office,
            dateBirth: this.employee.dateBirth,
            salary: this.employee.salary
        });
    }

    hasError(controlName: string, errorName: string) {
        return this.f[controlName].hasError(errorName);
    }

    setData() {
        const date = new Date();
        this.maxDate = new Date(date.getFullYear() + 1, date.getMonth(), date.getDay());
    }

    save() {
        if (this.editForm.valid) {
            this.employee.name = this.editForm.value.name;
            this.employee.dateBirth = this.editForm.value.dateBirth;
            this.employee.office = this.editForm.value.office;
            this.employee.salary = this.editForm.value.salary;
            this.dialogRef.close({ data: this.employee });
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}
