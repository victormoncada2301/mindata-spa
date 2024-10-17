import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService, Hero } from '../../core/services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHeroDialogComponent } from 'src/app/components/add-hero-dialog/add-hero-dialog.component';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})

export class HeroListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'power', 'actions'];
  heroes = new MatTableDataSource<Hero>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadHeroes();
  }

  ngAfterViewInit() {
    this.heroes.paginator = this.paginator;
  }

  loadHeroes(): void {
    this.heroes.data = this.heroService.getAllHeroes();
  }

  addHero(): void {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.addHero(result.name, result.power);
        this.loadHeroes();
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
        this.loadHeroes();
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
        this.loadHeroes();
      }
    });
  }
}
