import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [];
  private id: number = 1;

  constructor() {
    this.heroes = [
      { id: this.id++, name: 'Spiderman', power: "Fight" },
      { id: this.id++, name: 'Superman', power: "Strong" },
    ]
  }

  getAllHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }

  addHero(name: string, power: string): void {
    this.heroes.push({ id: this.id++, name, power });
  }

  updateHero(updatedHero: Hero): void {
    const index = this.heroes.findIndex(hero => hero.id === updatedHero.id);
    if (index > -1) {
      this.heroes[index] = updatedHero;
    }
  }

  deleteHero(id: number): void {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

  searchHeroes(query: string): Hero[] {
    return this.heroes.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase()));
  }

}
