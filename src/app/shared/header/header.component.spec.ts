import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateServiceStub } from '../stub/translate.service.stub';
import { MatMenuModule } from '@angular/material/menu';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerService: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceStub
        },
      ],
      imports: [
        RouterTestingModule,
        MatMenuModule,
        TranslateModule.forChild(),
      ]
    })
      .compileComponents();
    routerService = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
