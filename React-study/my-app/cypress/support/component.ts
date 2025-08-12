Cypress.Commands.add('mockPokemon', (idOrName: string | number, fixture = 'clefairy.json') => {
  const encoded = encodeURIComponent(String(idOrName))
  const url = `https://pokeapi.co/api/v2/pokemon/${encoded}`
  cy.intercept('GET', url, { fixture }).as('getPokemon')
})

// 2) Dispara a busca na UI
Cypress.Commands.add('searchPokemon', (term: string | number) => {
  cy.findByPlaceholderText(/search the pokémon/i)
    .clear()
    .type(String(term))
  cy.findByRole('button', { name: /search/i }).click()
})

// 3) Aguarda a requisição mockada terminar
Cypress.Commands.add('waitForPokemon', () => {
  return cy.wait('@getPokemon') // retorna a Interception
})

// 4) Asserções convenientes sobre o resultado
Cypress.Commands.add('expectPokemonVisible', (name: string) => {
  const re = new RegExp(name, 'i')
  cy.findByText(re).should('exist')
  cy.get(`img[alt*="${name}" i]`).should('be.visible')
})

// (opcional) utilitário por data-testid
Cypress.Commands.add(
  'getBySel',
  { prevSubject: 'optional' },
  (subject: JQuery<HTMLElement> | undefined, testId: string) => {
    const sel = `[data-testid="${testId}"]`
    return subject ? cy.wrap(subject).find(sel) : cy.get(sel)
  }
)