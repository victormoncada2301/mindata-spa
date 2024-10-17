import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private loadingService: LoadingService) { }

  onSubmit(): void {
    this.loadingService.show();
    this.dialogRef.close(true);
  }
}
