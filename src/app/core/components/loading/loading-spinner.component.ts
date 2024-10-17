import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.sass']
})
export class LoadingSpinnerComponent {
  loading$: Observable<boolean> = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) { }
}
