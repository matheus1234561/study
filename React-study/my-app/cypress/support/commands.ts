// Helpers para o fluxo da PokeAPI

// 1) Mock da PokeAPI para um id/nome específico
Cypress.Commands.add('mockPokemon', (idOrName: string | number, fixture = 'clefairy.json') => {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(String(idOrName))}`
  cy.intercept('GET', url, { fixture }).as('getPokemon')
})

// 2) Dispara a busca no teu UI (usa Testing Library; ajuste seletores se necessário)
Cypress.Commands.add('searchPokemon', (term: string | number) => {
  cy.findByPlaceholderText(/search the pokémon/i).clear().type(String(term))
  cy.findByRole('button', { name: /search/i }).click()
})

// 3) Aguarda a requisição mockada terminar
Cypress.Commands.add('waitForPokemon', () => {
  cy.wait('@getPokemon')
})

// 4) Asserções convenientes sobre o resultado
Cypress.Commands.add('expectPokemonVisible', (name: string) => {
  // nome em qualquer parte da tela
//   cy.findByText(new RegExp(name, 'i')).should('exist')

  // imagem com alt contendo o nome (case-insensitive)
  cy.get(`img[alt*="${name}" i]`).should('be.visible')
})

// (opcional) utilitário genérico por data-testid
Cypress.Commands.add(
  'getBySel',
  { prevSubject: 'optional' },
  (subject: JQuery<HTMLElement> | undefined, testId: string) => {
    const sel = `[data-testid="${testId}"]`
    return subject ? cy.wrap(subject).find(sel) : cy.get(sel)
  }
)