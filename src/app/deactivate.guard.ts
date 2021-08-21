import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotifactionService } from './shared/notifaction.service';

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<DashboardComponent> {
  constructor(private notificationservice: NotifactionService) {}

  canDeactivate():boolean
  {
     this.notificationservice.warn('Are You Sure');
     return true;
    }
  }
