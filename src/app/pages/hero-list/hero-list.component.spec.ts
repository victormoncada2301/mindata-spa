import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../../core/services/hero.service';
import { LoadingService } from '../../core/services/loading.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Hero } from '../../core/services/hero.service';
import { MaterialModule } from 'src/app/material.module';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let heroService: HeroService;
  let loadingService: LoadingService;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  const mockHeroes: Hero[] = [
    { id: 1, name: 'SPIDERMAN', power: 'Wall-crawling' },
    { id: 2, name: 'SUPERMAN', power: 'Super strength' },
    { id: 3, name: 'BATMAN', power: 'Martial arts' }
  ];

  beforeEach(async () => {
    const heroServiceMock = {
      heroes: jasmine.createSpy('heroes').and.returnValue(mockHeroes),
      deleteHero: jasmine.createSpy('deleteHero').and.returnValue(of(null)),
      updateHero: jasmine.createSpy('updateHero'),
    };

    const loadingServiceMock = {
      show: jasmine.createSpy('show'),
      hide: jasmine.createSpy('hide'),
    };

    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    dialogSpy.open.and.returnValue({
      afterClosed: () => of(true)
    } as any);

    await TestBed.configureTestingModule({
      declarations: [HeroListComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceMock },
        { provide: LoadingService, useValue: loadingServiceMock },
        { provide: MatDialog, useValue: dialogSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService);
    loadingService = TestBed.inject(LoadingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call heroService.heroes on initialization', () => {
    expect(heroService.heroes).toHaveBeenCalled();
    expect(component.heroesDataSource.data.length).toBe(3);
  });

  it('should call heroService.updateHero when editHero is triggered', () => {
    const hero = mockHeroes[0];

    const updatedHero = { name: 'UPDATED SPIDERMAN', power: 'Updated Power' };
    dialogSpy.open.and.returnValue({
      afterClosed: () => of(updatedHero)
    } as any);

    component.editHero(hero);

    expect(heroService.updateHero).toHaveBeenCalledWith(hero.id, updatedHero.name, updatedHero.power);
  });

  it('should call heroService.deleteHero when deleteHero is triggered', () => {
    component.deleteHero(mockHeroes[0].id);
    expect(heroService.deleteHero).toHaveBeenCalledWith(mockHeroes[0].id);
  });

  it('should filter heroes by name', () => {
    component.applyFilter({ target: { value: 'SPIDERMAN' } } as unknown as Event);
    expect(component.heroesDataSource.filteredData.length).toBe(1);
    expect(component.heroesDataSource.filteredData[0].name).toBe('SPIDERMAN');
  });

  it('should show and hide loading spinner', () => {
    expect(loadingService.show).toHaveBeenCalled();
    setTimeout(() => {
      expect(loadingService.hide).toHaveBeenCalled();
    }, 1000);
  });
});
