/// <reference types="cypress" />
context('Actions', () => {
  beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('https://www.online-calculator.com/full-screen-calculator/');
      getIframeBody().find('#canvas').click(80, 431, {
          force: true
      })
  })

  const getIframeDocument = () => {
      return cy
          .get('iframe[src*="/html5/online-calculator/index.php?v=10"]')
          .its('0.contentDocument')
  }

  const getIframeBody = () => {
      return getIframeDocument()
          .its('body')
          .then(cy.wrap)
  }

  describe('Addition Test', () => {
      const operations = [{
              value1: '1',
              operator: '+',
              value2: '1',
              result: '2'
          },
          {
              value1: '1',
              operator: '+',
              value2: '0',
              result: '1'
          },
          {
              value1: '10',
              operator: '+',
              value2: '1',
              result: '11'
          },
          {
              value1: '15',
              operator: '+',
              value2: '6',
              result: '21'
          },
          {
              value1: '154632',
              operator: '+',
              value2: '48',
              result: '154680'
          },
          {
              value1: '194',
              operator: '+',
              value2: '48',
              result: '242'
          },
      ]

      // dynamically create a single test for each operation in the list
      operations.forEach((operation) => {
          it(`Addition Test ${operation.value1} ${operation.operator} ${operation.value2} = ${operation.result}`, () => {
              cy.pressNumber(operation.value1);
              cy.pressButton(operation.operator);
              cy.pressNumber(operation.value2);
              cy.pressButton("=");

              getIframeBody()
                  .find('#canvas')
                  .toMatchImageSnapshot({
                      x: 5,
                      y: 4,
                      width: 300,
                      height: 300
                  });
          })
      })
  })

  describe('Numbers With Decimal Place Test', () => {
      const operations = [{
              value1: '1',
              operator1: '.',
              value2: '45',
              operator2: '+',
              value3: '1',
              operator3: '.',
              value4: '00',
              result: '2.45'
          },
          {
              value1: '0',
              operator1: '.',
              value2: '001',
              operator2: '+',
              value3: '252',
              operator3: '.',
              value4: '457',
              result: '252.458'
          },
          {
              value1: '1',
              operator1: '.',
              value2: '45',
              operator2: 'X',
              value3: '1',
              operator3: '.',
              value4: '2',
              result: '1.74'
          },
          {
              value1: '10',
              operator1: '.',
              value2: '64',
              operator2: 'X',
              value3: '1',
              operator3: '.',
              value4: '2',
              result: '12.768'
          },
          {
              value1: '10',
              operator1: '.',
              value2: '00',
              operator2: 'X',
              value3: '0',
              operator3: '.',
              value4: '00001',
              result: '0.0001'
          },
          {
              value1: '878',
              operator1: '.',
              value2: '000',
              operator2: 'X',
              value3: '0',
              operator3: '.',
              value4: '000',
              result: '0'
          },
          {
              value1: '10',
              operator1: '.',
              value2: '745',
              operator2: '/',
              value3: '0',
              operator3: '.',
              value4: '001',
              result: '10745'
          },
          {
              value1: '445',
              operator1: '.',
              value2: '00',
              operator2: '/',
              value3: '6',
              operator3: '.',
              value4: '12',
              result: '72.7124183'
          },
          {
              value1: '1',
              operator1: '.',
              value2: '52',
              operator2: '/',
              value3: '0',
              operator3: '.',
              value4: '00',
              result: 'Error'
          },
      ]

      // dynamically create a single test for each operation in the list
      operations.forEach((operation) => {
          it(`Addition Test ${operation.value1} ${operation.operator1} ${operation.value2} ${operation.value3} ${operation.operator2} ${operation.value4} = ${operation.result}`, () => {
              cy.pressNumber(operation.value1);
              cy.pressButton(operation.operator1);
              cy.pressNumber(operation.value2);

              cy.pressButton(operation.operator2);

              cy.pressNumber(operation.value3);
              cy.pressButton(operation.operator3);
              cy.pressNumber(operation.value4);
              cy.pressButton("=");

              getIframeBody()
                  .find('#canvas')
                  .toMatchImageSnapshot({
                      x: 5,
                      y: 4,
                      width: 300,
                      height: 300
                  });
          })
      })
  })

  describe('Subtraction Test', () => {
      const operations = [{
              value1: '1',
              operator: '-',
              value2: '1',
              result: '0'
          },
          {
              value1: '1',
              operator: '-',
              value2: '0',
              result: '0'
          },
          {
              value1: '250',
              operator: '-',
              value2: '251',
              result: '-1'
          },
          {
              value1: '47',
              operator: '-',
              value2: '5',
              result: '42'
          },
          {
              value1: '154632',
              operator: '-',
              value2: '1485',
              result: '153147'
          },
          {
              value1: '2',
              operator: '-',
              value2: '1485',
              result: '-1483'
          },
      ]

      operations.forEach((operation) => {
          it(`Addition Test ${operation.value1} ${operation.operator} ${operation.value2} = ${operation.result}`, () => {
              cy.pressNumber(operation.value1);
              cy.pressButton(operation.operator);
              cy.pressNumber(operation.value2);
              cy.pressButton("=");

              getIframeBody()
                  .find('#canvas')
                  .toMatchImageSnapshot({
                      x: 5,
                      y: 4,
                      width: 300,
                      height: 300
                  });
          })
      })
  })

  describe('Multiplication Test', () => {
      const operations = [{
              value1: '1',
              operator: 'X',
              value2: '1',
              result: '1'
          },
          {
              value1: '1',
              operator: 'X',
              value2: '0',
              result: '0'
          },
          {
              value1: '1',
              operator: 'X',
              value2: '10',
              result: '100'
          },
          {
              value1: '2',
              operator: 'X',
              value2: '48',
              result: '96'
          },
          {
              value1: '88888888',
              operator: 'X',
              value2: '14585',
              result: '5.925867e+13'
          },
          {
              value1: '141',
              operator: 'X',
              value2: '7852',
              result: '-1107032'
          },
      ]



      operations.forEach((operation) => {
          it(`Addition Test ${operation.value1} ${operation.operator} ${operation.value2} = ${operation.result}`, () => {
              cy.pressNumber(operation.value1);
              cy.pressButton(operation.operator);
              cy.pressNumber(operation.value2);
              cy.pressButton("=");

              getIframeBody()
                  .find('#canvas')
                  .toMatchImageSnapshot({
                      x: 5,
                      y: 4,
                      width: 300,
                      height: 300
                  });
          })
      })
  })

  describe('Division Test', () => {
      const operations = [{
              value1: '1',
              operator: '/',
              value2: '1',
              result: '1'
          },
          {
              value1: '1',
              operator: '/',
              value2: '0',
              result: 'Error'
          },
          {
              value1: '1',
              operator: '/',
              value2: '45',
              result: '0.02222222'
          },
          {
              value1: '48',
              operator: '/',
              value2: '2',
              result: '24'
          },
          {
              value1: '100',
              operator: '/',
              value2: '2',
              result: '50'
          },
          {
              value1: '485242',
              operator: '/',
              value2: '2',
              result: '242621'
          },
          {
              value1: '485242',
              operator: '/',
              value2: '2',
              result: '242621'
          }
      ]

      operations.forEach((operation) => {
          it(`Addition Test ${operation.value1} ${operation.operator} ${operation.value2} = ${operation.result}`, () => {
              cy.pressNumber(operation.value1);
              cy.pressButton(operation.operator);
              cy.pressNumber(operation.value2);
              cy.pressButton("=");

              getIframeBody()
                  .find('#canvas')
                  .toMatchImageSnapshot({
                      x: 5,
                      y: 4,
                      width: 300,
                      height: 300
                  });
          })
      })

  })



  describe('Dynamic Calculation Test', () => {
      const operations = [{
              value1: '1',
              operator1: '+',
              value2: '1',
              operator2: 'X',
              value3: '1',
              operator3: '/',
              value4: '1',
              result: '2'
          },
          {
              value1: '10',
              operator1: '/',
              value2: '2',
              operator2: 'X',
              value3: '4',
              operator3: '+',
              value4: '1',
              result: '21'
          },
          {
              value1: '1',
              operator1: '/',
              value2: '1',
              operator2: '+',
              value3: '0',
              operator3: '+',
              value4: '1',
              result: '2'
          },
          {
              value1: '100',
              operator1: 'X',
              value2: '2',
              operator2: 'X',
              value3: '2',
              operator3: 'X',
              value4: '2',
              result: '800'
          },
          {
              value1: '1',
              operator1: '+',
              value2: '1',
              operator2: '+',
              value3: '1',
              operator3: '+',
              value4: '1',
              result: '4'
          },
          {
              value1: '1',
              operator1: '-',
              value2: '1',
              operator2: '-',
              value3: '1',
              operator3: '-',
              value4: '1',
              result: '-4'
          },
          {
              value1: '45',
              operator1: '.',
              value2: '25',
              operator2: 'X',
              value3: '3',
              operator3: '+',
              value4: '5',
              result: '140.75'
          },
          {
              value1: '15',
              operator1: 'X',
              value2: '4',
              operator2: '/',
              value3: '0.25',
              operator3: '+',
              value4: '6',
              result: '246'
          }
      ]

      // dynamically create a single test for each operation in the list
      operations.forEach((operation) => {
          it(`Addition Test ${operation.value1} ${operation.operator1} ${operation.value2} ${operation.operator2} ${operation.value3} ${operation.operator3}  ${operation.value4} = ${operation.result}`, () => {
              cy.pressNumber(operation.value1);
              cy.pressButton(operation.operator1);
              cy.pressNumber(operation.value2);

              cy.pressButton(operation.operator2);

              cy.pressNumber(operation.value3);
              cy.pressButton(operation.operator3);
              cy.pressNumber(operation.value4);
              cy.pressButton("=");

              getIframeBody()
                  .find('#canvas')
                  .toMatchImageSnapshot({
                      x: 5,
                      y: 4,
                      width: 300,
                      height: 300
                  });
          })
      })
  })



  Cypress.Commands.add('pressNumber', (number) => {
      var press = [];
      for (var i = 0; i < number.length; i++) {
          press.push(number.charAt(i));
      }

      for (i = 0; i < number.length; i++) {
          switch (press[i]) {
              case "1":
                  getIframeBody().find('#canvas').click(80, 431, {
                      force: true
                  })
                  break;
              case "2":
                  getIframeBody().find('#canvas').click(120, 431, {
                      force: true
                  })
                  break;
              case "3":
                  getIframeBody().find('#canvas').click(200, 431, {
                      force: true
                  })
                  break;
              case "4":
                  getIframeBody().find('#canvas').click(80, 331, {
                      force: true
                  })
                  break;
              case "5":
                  getIframeBody().find('#canvas').click(120, 331, {
                      force: true
                  })
                  break;
              case "6":
                  getIframeBody().find('#canvas').click(200, 331, {
                      force: true
                  })
                  break;
              case "7":
                  getIframeBody().find('#canvas').click(80, 231, {
                      force: true
                  })
                  break;
              case "8":
                  getIframeBody().find('#canvas').click(120, 231, {
                      force: true
                  })
                  break;
              case "9":
                  getIframeBody().find('#canvas').click(200, 231, {
                      force: true
                  })
                  break;
              case "0":
                  getIframeBody().find('#canvas').click(80, 531, {
                      force: true
                  })
                  break;
          }
      }
  })

  Cypress.Commands.add('pressButton', (button) => {
      switch (button) {
          case "+":
              getIframeBody().find('#canvas').click(300, 531, {
                  force: true
              })
              break;
          case "-":
              getIframeBody().find('#canvas').click(300, 431, {
                  force: true
              })
              break;
          case "=":
              getIframeBody().find('#canvas').click(400, 531, {
                  force: true
              })
              break;
          case "/":
              getIframeBody().find('#canvas').click(300, 231, {
                  force: true
              })
              break;
          case "X":
              getIframeBody().find('#canvas').click(300, 331, {
                  force: true
              })
              break;
          case ".":
              getIframeBody().find('#canvas').click(120, 531, {
                  force: true
              })
              break;
      }
  })
})