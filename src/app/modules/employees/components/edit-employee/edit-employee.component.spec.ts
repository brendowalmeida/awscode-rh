import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeComponent } from './edit-employee.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateServiceStub } from 'src/app/shared/stub/translate.service.stub';

describe('EditEmployeeComponent', () => {
  let component: EditEmployeeComponent;
  let fixture: ComponentFixture<EditEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmployeeComponent],
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
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
