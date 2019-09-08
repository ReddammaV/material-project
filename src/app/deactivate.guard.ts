import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor() {
  }

  canDeactivate(component: CanComponentDeactivate):  Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
