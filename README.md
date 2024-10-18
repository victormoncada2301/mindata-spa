# SPA - Super Héroes

Esta aplicación es una SPA (Single Page Application) desarrollada en Angular que permite gestionar un listado de superhéroes. Con ella podrás agregar, editar, eliminar y buscar héroes de manera dinámica. A continuación, se describen los detalles de la implementación, las tecnologías utilizadas y los pasos para ejecutar el proyecto.

# Características de la aplicación

-  Registrar un nuevo superhéroe: Se puede crear un nuevo héroe a través de un formulario, con validaciones en sus campos.
-  Consultar todos los superhéroes: Se muestra un listado paginado de los héroes almacenados en el servicio.
-  Consultar un héroe por ID: Desde el listado, al editar un héroe, se pueden consultar sus detalles mediante su ID.
-  Buscar héroes por nombre: Permite buscar héroes cuyo nombre contenga el texto ingresado en el campo de búsqueda.
-  Modificar un héroe existente: Se puede seleccionar un héroe del listado para editar su nombre y poder.
-  Eliminar un héroe: Opción para eliminar un héroe, con una confirmación previa.

# Requisitos previos

Para poder trabajar con este proyecto, asegúrate de tener instalados los siguientes programas en tu equipo:
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- Clonar el repositorio
- Instalar las dependencias
  
# Estructura de carpetas y archivos principales:

## src/app/:
 
  Contiene todos los componentes, servicios y módulos de la aplicación.

## components :

- hero-list: Componente que muestra el listado paginado de héroes.
- add-hero-dialog: Componente de diálogo para agregar o editar héroes.
- confirm-dialog: Diálogo de confirmación para eliminar un héroe.

## services:

  - hero.service.ts: Servicio que maneja la lógica de negocio y los datos de los héroes.
  - loading.service.ts: Servicio que gestiona la visualización del "spinner" de carga.

## directives:

  - uppercase.directive.ts: Directiva para convertir el texto a mayúsculas automáticamente.

## interceptors

  - loading.interceptor.ts: Interceptor que activa el spinner mientras se realizan operaciones.

# Signals 

En Angular 16, se introducen los signals, un enfoque reactivo más eficiente para gestionar el estado. En esta aplicación, se utilizan signals para manejar la lista de héroes y asegurar que los cambios en los datos se reflejen automáticamente 
en la interfaz sin necesidad de suscripciones adicionales.

### Uso de `signals` en `HeroService`

```typescript
import { Injectable, signal } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private id: number = 1;
  private heroesSignal = signal<Hero[]>([
    { id: this.id++, name: 'SPIDERMAN', power: 'Wall-crawling' },
    { id: this.id++, name: 'SUPERMAN', power: 'Super strength' }
  ]);

  getAllHeroes() {
    return this.heroesSignal();
  }

  addHero(name: string, power: string) {
    this.heroesSignal.update(heroes => [...heroes, { id: this.id++, name, power }]);
  }
}

effect(() => {
  const heroes = this.heroService.heroes();
  this.heroesDataSource.data = heroes;
});
```

# Tecnologías utilizadas

- Angular 16: Framework principal para el desarrollo de la aplicación.
- Angular Material: Librería utilizada para la interfaz de usuario.
- TypeScript: Lenguaje de programación utilizado para escribir código tipado.
- Karma y Jasmine: Herramientas para ejecutar tests unitarios.
- Git: Control de versiones.
   
# Ejecutar la aplicación

- ng serve
  
Luego, abre tu navegador y navega a http://localhost:4200/ para ver la aplicación en funcionamiento.

La aplicación se recargará automáticamente cada vez que realices cambios en el código fuente.

![image](https://github.com/user-attachments/assets/1186a9d2-dcff-4435-ad72-d38fe2bb1d4e)
