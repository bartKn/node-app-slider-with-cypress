describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
    it('Checks if the gallery is displayed correctly', function () {
        cy.visit('http://localhost:3000');
        // Krok 2: Sprawdź, czy główny kontener galerii jest widoczny.
        cy.get('.swiper').should('be.visible');
        cy.get('.swiper-button-next').click();
        cy.wait(2000)
        cy.get('.swiper-button-next').click();
        cy.wait(2000)
        cy.get('.swiper-button-next').click();
        cy.wait(2000)
        cy.get('.swiper-slide-active').should('contain', 'Rome');
      });
  });