import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifactionService {
  config = {
    closeButton: true,
    timeOut: 3000,
    extendedTimeOut: 1000,
    easing: 'ease-out',
    easeTime: 1000,
    disableTimeOut: false,
    progressBar: true,
    tapToDismiss: true,
    enableHtml: true
  };
  public suppressErrorMessage: boolean;
  constructor(private messenger: ToastrService) {
    this.suppressErrorMessage = false;
  }
  success(message?: string, title?: string) {
    this.messenger.success(message, title, this.config)
  }
  info(message?: string, title?: string) {
    this.messenger.info(message, title, this.config);
  }
  warn(message?: string, title?: string) {
    this.messenger.warning(message, title, this.config);
  }
  error(message?: string, title?: string) {
    this.messenger.error(message, title, this.config);
  }



 
}
