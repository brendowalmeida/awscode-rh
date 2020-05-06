import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { of, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

class AuthServiceMock {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLogged() {
    return of();
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let routerService: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ AuthService ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    routerService = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be canActivate', () => {
    const isLoggedSpy = spyOnProperty(authService, 'isLogged').and.returnValues(of(true));
  
    guard.canActivate();

    expect(isLoggedSpy).toHaveBeenCalled();
  });

  it('should be validate', () => {
    spyOn(routerService, 'navigateByUrl');
    const isNotAuthenticated = guard.validate(false);

    expect(routerService.navigateByUrl).toHaveBeenCalledWith('/auth');
    expect(isNotAuthenticated).toBeFalsy();
  });

  it('should be validate authenticated', () => {
    spyOn(routerService, 'navigateByUrl');
    const isAuthenticated = guard.validate(true);

    expect(routerService.navigateByUrl).not.toHaveBeenCalled();
    expect(isAuthenticated).toBeTruthy();
  });
});
