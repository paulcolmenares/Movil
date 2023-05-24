import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './servicios/user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate {
  constructor(private roles: UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.roles.ROL=="Usuario") return true;
      return false;
  }
  
}
