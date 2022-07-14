import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if(isLoggedIn){
      return true;
    }else{
      this.router.navigate(['/homepage']);
    }
    return false;
  }
}