describe('Pokémon Search', () => {
  it('busca só ao clicar e renderiza o resultado', () => {
    cy.mockPokemon(35, 'clefairy.json')
    cy.visit('/', { timeout: 90000 })

    cy.searchPokemon(35)
    cy.waitForPokemon()

    cy.expectPokemonVisible('clefairy')
  })
})