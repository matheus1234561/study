declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mockPokemon(idOrName: string | number, fixture?: string): Chainable<void>
      searchPokemon(term: string | number): Chainable<void>
      waitForPokemon(): Chainable<void>
      expectPokemonVisible(name: string): Chainable<void>
      getBySel(testId: string): Chainable<JQuery<HTMLElement>>
      getBySel(subject: JQuery<HTMLElement>, testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
export {}