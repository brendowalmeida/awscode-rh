import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let routerService: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
    routerService = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be login', () => {
    spyOn(routerService, 'navigateByUrl');

    service.login('mock@mail.com');

    expect(routerService.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should be not login', () => {
    spyOn(routerService, 'navigateByUrl');

    service.login('');

    expect(routerService.navigateByUrl).not.toHaveBeenCalledWith('/');
  });

  it('should be logout', () => {
    spyOn(routerService, 'navigateByUrl');

    service.logout();

    expect(routerService.navigateByUrl).toHaveBeenCalledWith('/auth');
  });
});
