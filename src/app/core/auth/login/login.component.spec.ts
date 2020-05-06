import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateServiceStub } from 'src/app/shared/stub/translate.service.stub';
import { AuthService } from '../../services/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const formMock = {
  email: ['', [Validators.required, Validators.email]]
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule, TranslateModule.forChild() ],
      providers: [ 
        {
          provide: TranslateService,
          useClass: TranslateServiceStub
        },
        {
          provide: AuthService,
          useValue: {
            login: (email: string) => ''
          }
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be life cycle onInit', () => {
    const buildFormSpy = spyOn(component, 'buildForm').and.stub();

    component.ngOnInit();

    expect(buildFormSpy).toHaveBeenCalled()
  });

  it('should be buildForm', () => {
    const formGroupMock = formBuilder.group(formMock);
    const formBuildGroupSpy = spyOn(formBuilder, 'group').and.returnValue(formGroupMock);

    component.buildForm();

    expect(formBuildGroupSpy).toHaveBeenCalledWith(formMock);
    expect(component.loginForm).toBeDefined();
  });

  it('should be form hasError', () => {
    component.loginForm = formBuilder.group(formMock)

    component.f.email.setErrors({ email: true });

    const resultHasError = component.hasError('email', 'email');

    expect(resultHasError).toBeTruthy();
  });

  it('should be form not hasError', () => {
    component.loginForm = formBuilder.group(formMock)

    const resultHasError = component.hasError('email', 'email');

    expect(resultHasError).toBeFalsy();
  });

  it('should be login form valid', () => {
    const loginSpy = spyOn(authService, 'login').and.stub();

    component.loginForm = formBuilder.group({
      email: ['']
    });

    fixture.detectChanges();

    component.login();

    expect(loginSpy).toHaveBeenCalled();
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should be login form invalid', () => {
    const loginSpy = spyOn(authService, 'login').and.stub();

    component.loginForm = formBuilder.group({
      email: ['', Validators.required]
    });

    fixture.detectChanges();

    component.login();
    
    expect(loginSpy).not.toHaveBeenCalled();
    expect(component.loginForm.valid).toBeFalsy();
  });
});
