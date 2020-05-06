import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { Employees } from '../../../models/employees.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-create-employee',
    templateUrl: './create-employee-dialog.html',
    styleUrls: ['./create-employee.dialog.scss']
})
export class CreateEmployeeDialog {

    public createForm: FormGroup;
    public maxDate: Date;
    public employee: Employees = new Employees();

    constructor(
        public dialogRef: MatDialogRef<CreateEmployeeDialog>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private formBuilder: FormBuilder
    ) {
        this.buildForm();
        this.setData();
    }

    get f() { return this.createForm.controls; }

    buildForm() {
        this.createForm = this.formBuilder.group({
            name: ['', Validators.required],
            office: ['', Validators.required],
            dateBirth: ['', Validators.required],
            salary: ['', Validators.required]
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
        if (this.createForm.valid) {
            this.employee.id = new Date().getTime();
            this.employee.name = this.createForm.value.name;
            this.employee.dateBirth = this.createForm.value.dateBirth;
            this.employee.office = this.createForm.value.office;
            this.employee.salary = this.createForm.value.salary;
            this.dialogRef.close({ data: this.employee });
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}
