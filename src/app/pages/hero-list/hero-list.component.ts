import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService, Hero } from '../../core/services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHeroDialogComponent } from 'src/app/components/add-hero-dialog/add-hero-dialog.component';

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

  openDialog(): void {
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

  ngAfterViewInit() {
    this.heroes.paginator = this.paginator;
  }

  loadHeroes(): void {
    this.heroes.data = this.heroService.getAllHeroes();
  }

  addHero(name: string, power: string): void {
    this.heroService.addHero(name, power);
    this.loadHeroes();
  }

  deleteHero(id: number): void {
    if (confirm("Are you sure you want to delete this hero?")) {
      this.heroService.deleteHero(id);
      this.loadHeroes();
    }
  }

  editHero(hero: Hero): void {
    // Implementa la lógica para abrir un formulario de edición y modificar el héroe
  }
}
