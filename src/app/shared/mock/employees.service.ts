import { Injectable } from '@angular/core';
import { Employees } from 'src/app/modules/employees/models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  public employees: Array<Employees> = new Array<Employees>();

  constructor() {
    this.set();
  }

  get(): Array<Employees> {
    return this.employees;
  }

  set() {
    this.employees.push(
      {
        id: new Date().getTime()+1,
        name: 'José Campos',
        dateBirth: new Date('1990-10-05 00:00:00'),
        office: 'Analista Dev Front Senior',
        salary: 8000
      },
      {
        id: new Date().getTime()+2,
        name: 'Patricia Fernandes',
        dateBirth: new Date('1989-02-23 00:00:00'),
        office: 'Analista Dev Front Pleno',
        salary: 5550
      },
      {
        id: new Date().getTime()+3,
        name: 'Rogério Fernandes',
        dateBirth: new Date('1980-03-25 00:00:00'),
        office: 'Analista Dev Back Senior',
        salary: 8000
      },

      {
        id: new Date().getTime()+4,
        name: 'Andressa Ferreira',
        dateBirth: new Date('1997-01-18 00:00:00'),
        office: 'Analista Dev Back Pleno',
        salary: 6000
      },
      {
        id: new Date().getTime()+5,
        name: 'Fernando Henrique',
        dateBirth: new Date('1995-11-29 00:00:00'),
        office: 'Analista Dev Fullstack Junior',
        salary: 3530
      }
    );
  }
}
