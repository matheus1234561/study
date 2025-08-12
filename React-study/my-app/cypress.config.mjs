import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/component.ts',
  },
  e2e: {
    baseUrl: 'http://localhost:5173/',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
  },
})