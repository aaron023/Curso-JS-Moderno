/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
    it('Campos nueva cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Ozzy gua gua');

        cy.get('[data-cy="propietario-input"]')
            .type('Jacinto Rios');

        cy.get('[data-cy="telefono-input"]')
            .type('1234567890');

        cy.get('[data-cy="fecha-input"]')
            .type('2022-05-12');

        cy.get('[data-cy="hora-input"]')
            .type('11:00');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo quiere estar dormido y no come');

        cy.get('[data-cy="submit-cita"]')
            .click();
        
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal','Administra tus Citas');

        // Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Se agregó correctamente');

        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-success');

    });

    it('Edita la cita', () => {
        cy.get('[data-cy="btn-editar"]')
            .click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Ozzy Osborn');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Guardado Correctamente');

        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-success');
    });
});