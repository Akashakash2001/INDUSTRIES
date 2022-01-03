import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {

  }
  success(message, title?) {
    this.toastr.success(message, title || '', { closeButton: true, timeOut: 5000 });
  }
}
