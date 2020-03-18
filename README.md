# Project ExamplesUnitTest

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Funciones basicas

``` javascript
// Ejemplos con string
// Esperamos un tipo especifico de dato
const variable = 'una cadena';
expect(typeof variable).toBe('string');

// Contiene
expect(variable).toBe('una cadena'); // cuando sabemos especificamente el retorno
expect(variable).toContain('cadena'); // evitamos que la prueba sea muy fragil

// Ejemplos con number
let numero = 200;
expect(100).toBe(100);
expect(24).toBe(51)

// Booleanos
const logeado = true;
expect(logeado).toBeTruthy();// podemos usar la negacion con .not.toBeTruthy()

// Arreglos
let usuarios = ['Miguel','Robert','Carlos','Marcos'];
expect(usuario.length).toBeGreaterThanOrEqual(3);
// Comptobamos que venga un elemento especifico al menos
expect(usuarios).toContain('Miguel');
expect(usuarios).toContain('Marcos');

/** Clases: basicamente evaluamos sus propiedades y metodos
 * para las clases se respeta el ciclo de vida de las pruebas
 * beforeAll(): se ejecuta antes de todas las pruebas
 * beforeEach(): se ejecuta antes de cada prueba
 * afterAll(): se ejecuta luego de realizada todas la pruebas
 * afterEach(): se ejecuta luego de cada prueba
 */

// Ver el reporte de cobertura de nuestra aplicacion

> ng test --code-coverage 

/**
 * Omitir una prueba: xit('', ()=>{})
 * ejecutar una prueba especifica: fit('', ()=>{})
 * 
 */
```