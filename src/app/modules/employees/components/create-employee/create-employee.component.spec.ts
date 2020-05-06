import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateServiceStub } from 'src/app/shared/stub/translate.service.stub';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceStub
        }, 
        MatDialog
      ],
      imports: [ 
        MatDialogModule,
        TranslateModule.forChild()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
