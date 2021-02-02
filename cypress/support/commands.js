// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('pressNumber', (number) => { 
//     switch(number) {
//         case 1:
//             getIframeBody().find('#canvas').click(80, 431, { force: true })
//             break;
//         case 2:
//             getIframeBody().find('#canvas').click(120, 431, { force: true })
//             break;
//         case 3:
//             getIframeBody().find('#canvas').click(200, 431, { force: true })
//             break;
//         case 4:
//             getIframeBody().find('#canvas').click(80, 331, { force: true })
//             break;
//         case 5:
//             getIframeBody().find('#canvas').click(120, 331, { force: true })
//             break;  
//         case 6:
//             getIframeBody().find('#canvas').click(200, 331, { force: true })
//             break; 
//         case 7:
//             getIframeBody().find('#canvas').click(80, 231, { force: true })
//             break;
//         case 8:
//             getIframeBody().find('#canvas').click(120, 231, { force: true })
//             break;
//         case 9:
//             getIframeBody().find('#canvas').click(200, 231, { force: true })
//             break;
//         case 0:
//             getIframeBody().find('#canvas').click(80, 131, { force: true })
//             break;
//       }
// });

import 'cypress-plugin-snapshots/commands';