import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
      return this.authService.isLogged.pipe(
        take(1),
        map((isLogged: boolean) => this.validate(isLogged))
      );
  }

  validate(authenticated: boolean) {
    if(!authenticated) {
      this.router.navigateByUrl('/auth');
    }

    return authenticated;
  }
}
