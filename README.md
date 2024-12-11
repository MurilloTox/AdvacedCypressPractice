# AdvacedCypressPractice

Este repositorio contiene un framework de pruebas automatizadas construido con Cypress y Cucumber para probar la funcionalidad del sitio web [Demoblaze](https://www.demoblaze.com/).

## Descripción General
El framework está diseñado para seguir las mejores prácticas de pruebas basadas en Cypress y Cucumber. Incluye varias técnicas como el uso de `cy.request()`, el modelo de objetos de página (*Page Object Model*, POM) y *fixtures* para garantizar una cobertura de pruebas integral y mantenible.

## Características
El framework cubre las siguientes funcionalidades del sitio web de Demoblaze:

1. **Carrusel de Elementos Destacados**: Esta funcionalidad incluye al menos 3 escenarios para probar el funcionamiento del carrusel de elementos destacados.
2. **Navegación a Enlaces del Encabezado**: Esta funcionalidad incluye al menos 3 escenarios para probar la navegación hacia todos los enlaces del encabezado.
3. **Categorías, Selección de Productos, Añadir al Carrito, Eliminar del Carrito, Comprar Carrito**: Esta funcionalidad incluye escenarios para probar las distintas acciones relacionadas con categorías, selección de productos, añadir al carrito, comprar el carrito y eliminar elementos del carrito.

## Requisitos Previos
- Node.js (versión 12 o superior)
- npm (versión 6 o superior) o yarn

## Instalación
1. Clone el repositorio.
2. Abra el terminal del repositorio y escribir: npm install, con esto ya tendrá todas las dependencias que se usaron.

## Observaciones
En términos generales todos los tests funcionan y usan una buena lógica, sin embargo en el último paso del test final funciona 1 de cada 10 veces aproximadamente, no logré identificar que es lo que causa el error, lo que hace es que el fromulario para llenar la información de pago desaparece de la nada y eso es lo que hace que se caiga el test.
