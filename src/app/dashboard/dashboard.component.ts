import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotifactionService } from '../shared/notifaction.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  


  constructor(
    private notificationService: NotifactionService,
    private authService:AuthService,
   private router:Router,
   
  ) { }

  ngOnInit(): void {
  }

  deleteCookie(){
    this.authService.deleteCookies();
    this.notificationService.warn('Your Page Will Be Disapper');
    this.router.navigate(['/login'])
    return true;
      
   
    
    
    
  }

}
