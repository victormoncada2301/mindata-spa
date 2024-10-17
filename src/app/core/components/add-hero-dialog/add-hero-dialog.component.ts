import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from 'src/app/core/models/hero.model';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-add-hero-dialog',
  templateUrl: './add-hero-dialog.component.html',
  styleUrls: ['./add-hero-dialog.component.sass']
})
export class AddHeroDialogComponent {
  heroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddHeroDialogComponent>,
    private loadingService: LoadingService,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      power: ['', [Validators.required, Validators.minLength(3)]]
    });

    if (data) {
      this.heroForm.patchValue(data);
    }
  }

  onSubmit(): void {
    if (this.heroForm.valid) {
      this.loadingService.show();
      this.dialogRef.close(this.heroForm.value);
    }
  }
}
