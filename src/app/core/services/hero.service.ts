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
      { id: this.id++, name: 'SPIDERMAN', power: 'Wall-crawling' },
      { id: this.id++, name: 'SUPERMAN', power: 'Super strength' },
      { id: this.id++, name: 'BATMAN', power: 'Martial arts' },
      { id: this.id++, name: 'WONDER WOMAN', power: 'Super agility' },
      { id: this.id++, name: 'FLASH', power: 'Super speed' },
      { id: this.id++, name: 'AQUAMAN', power: 'Underwater breathing' },
      { id: this.id++, name: 'GREEN LANTERN', power: 'Energy constructs' },
      { id: this.id++, name: 'IRON MAN', power: 'High-tech suit' },
      { id: this.id++, name: 'THOR', power: 'Thunder control' },
      { id: this.id++, name: 'HULK', power: 'Unlimited strength' },
      { id: this.id++, name: 'BLACK WIDOW', power: 'Espionage' },
      { id: this.id++, name: 'DOCTOR STRANGE', power: 'Magic' },
      { id: this.id++, name: 'SCARLET WITCH', power: 'Reality warping' },
      { id: this.id++, name: 'CAPTAIN MARVEL', power: 'Energy absorption' },
      { id: this.id++, name: 'ANT-MAN', power: 'Size manipulation' },
      { id: this.id++, name: 'WOLVERINE', power: 'Regeneration' },
      { id: this.id++, name: 'DEADPOOL', power: 'Immortality' },
      { id: this.id++, name: 'BLACK PANTHER', power: 'Enhanced senses' },
      { id: this.id++, name: 'STAR-LORD', power: 'Master tactician' },
      { id: this.id++, name: 'GROOT', power: 'Regeneration' }
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

  updateHero(id: number, name: string, power: string): void {
    const hero = this.heroes.find(h => h.id === id);
    if (hero) {
      hero.name = name;
      hero.power = power;
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

