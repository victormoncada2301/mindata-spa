import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all heroes', () => {
    const heroes = service.heroes();
    expect(heroes.length).toBe(20);
  });

  it('should get a hero by id', () => {
    const hero = service.getHeroById(1);
    expect(hero).toBeTruthy();
    expect(hero?.name).toBe('SPIDERMAN');
  });

  it('should add a new hero', () => {
    service.addHero('TEST HERO', 'Test Power');
    const heroes = service.heroes();
    const addedHero = heroes.find(hero => hero.name === 'TEST HERO');
    expect(addedHero).toBeTruthy();
    expect(addedHero?.power).toBe('Test Power');
  });

  it('should update a hero', () => {
    service.updateHero(1, 'UPDATED SPIDERMAN', 'Updated Power');
    const updatedHero = service.getHeroById(1);
    expect(updatedHero).toBeTruthy();
    expect(updatedHero?.name).toBe('UPDATED SPIDERMAN');
    expect(updatedHero?.power).toBe('Updated Power');
  });

  it('should delete a hero', () => {
    service.deleteHero(1);
    const hero = service.getHeroById(1);
    expect(hero).toBeUndefined();
  });

  it('should search for heroes by query', () => {
    const heroes = service.searchHeroes('man');
    expect(heroes.length).toBeGreaterThan(0);
    expect(heroes.every(hero => hero.name.toLowerCase().includes('man'))).toBeTrue();
  });

  it('should return an empty array if no hero matches the search query', () => {
    const heroes = service.searchHeroes('nonexistent hero');
    expect(heroes.length).toBe(0);
  });
});
