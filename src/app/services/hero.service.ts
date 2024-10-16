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
      { id: this.id++, name: 'Spiderman', power: 'Wall-crawling' },
      { id: this.id++, name: 'Superman', power: 'Super strength' },
      { id: this.id++, name: 'Batman', power: 'Martial arts' },
      { id: this.id++, name: 'Wonder Woman', power: 'Super agility' },
      { id: this.id++, name: 'Flash', power: 'Super speed' },
      { id: this.id++, name: 'Aquaman', power: 'Underwater breathing' },
      { id: this.id++, name: 'Green Lantern', power: 'Energy constructs' },
      { id: this.id++, name: 'Iron Man', power: 'High-tech suit' },
      { id: this.id++, name: 'Thor', power: 'Thunder control' },
      { id: this.id++, name: 'Hulk', power: 'Unlimited strength' },
      { id: this.id++, name: 'Black Widow', power: 'Espionage' },
      { id: this.id++, name: 'Doctor Strange', power: 'Magic' },
      { id: this.id++, name: 'Scarlet Witch', power: 'Reality warping' },
      { id: this.id++, name: 'Captain Marvel', power: 'Energy absorption' },
      { id: this.id++, name: 'Ant-Man', power: 'Size manipulation' },
      { id: this.id++, name: 'Wolverine', power: 'Regeneration' },
      { id: this.id++, name: 'Deadpool', power: 'Immortality' },
      { id: this.id++, name: 'Black Panther', power: 'Enhanced senses' },
      { id: this.id++, name: 'Star-Lord', power: 'Master tactician' },
      { id: this.id++, name: 'Groot', power: 'Regeneration' }
    ];
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
export { Hero };

