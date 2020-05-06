import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  login(email: string) {
    if(email) {
      this.loggedIn.next(true);
      this.router.navigateByUrl('/');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigateByUrl('/auth');
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

}
