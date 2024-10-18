import { Component, OnInit, ViewChild, effect } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService, Hero } from '../../core/services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingService } from 'src/app/core/services/loading.service';
import { AddHeroDialogComponent } from 'src/app/core/components/add-hero-dialog/add-hero-dialog.component';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'power', 'actions'];
  heroesDataSource = new MatTableDataSource<Hero>();
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private heroService: HeroService,
    public dialog: MatDialog,
    private loadingService: LoadingService
  ) {
    effect(() => {
      const heroes = this.heroService.heroes();
      this.heroesDataSource.data = heroes;
      setTimeout(() => {
        this.loadingService.hide();  
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.loadingService.show();
    this.heroesDataSource.filterPredicate = (data: Hero, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
      return (
        data.id.toString().includes(transformedFilter) ||
        data.name.toLowerCase().includes(transformedFilter) ||
        data.power.toLowerCase().includes(transformedFilter)
      );
    };
  }

  ngAfterViewInit() {
    this.heroesDataSource.paginator = this.paginator;
    this.loadingService.hide();
  }

  addHero(): void {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.addHero(result.name, result.power);
      }
    });
  }

  deleteHero(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.deleteHero(id);
      }
    });
  }

  editHero(hero: Hero): void {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      width: '400px',
      data: hero
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.updateHero(hero.id, result.name, result.power);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.heroesDataSource.filter = filterValue.trim().toLowerCase();
    if (this.heroesDataSource.paginator) {
      this.heroesDataSource.paginator.firstPage();
    }
  }
}
