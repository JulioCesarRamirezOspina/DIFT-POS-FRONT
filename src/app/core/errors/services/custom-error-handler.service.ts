import { ErrorHandler, Injectable } from '@angular/core';
import { ToastService } from 'src/app/common/toast/services/toast.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {


  constructor(private toastService: ToastService) { }

  handleError(error: any) {
    console.log(error);
    debugger;
    if (error.status === 409) {
      this.toastService.add({
        key: 'tl',
        severity: 'info',
        summary: 'Info',
        detail: error.error.message,
      });
    }
    else
    {
      this.toastService.add({
        key: 'tl',
        severity: 'info',
        summary: 'Info',
        detail: 'se ha generado un error por favor contáctese con soporte técnico',
      });
    }
    // // console.warn('Se ha generado un error', error);
    // this.notifier.add({ severity: 'error', summary: 'Error', detail: 'error.error.message' });
  }
}
