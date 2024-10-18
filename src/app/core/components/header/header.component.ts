import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddHeroDialogComponent } from '../add-hero-dialog/add-hero-dialog.component';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog, private heroService: HeroService) { }

  onAddNewHero(): void {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.addHero(result.name, result.power);
      }
    });
  }
}
