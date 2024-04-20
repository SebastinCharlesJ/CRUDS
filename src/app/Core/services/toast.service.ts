import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: MatSnackBar) { }
  async presentToast(header:string,message:string,color:string) {
    const toast = await this.toastController.open(message, 'Close', {
        duration: 4000,
        verticalPosition: "bottom", // Allowed values are  'top' | 'bottom'
        horizontalPosition: "center", // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'

      });
  }
}
