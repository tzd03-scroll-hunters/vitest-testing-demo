# Test Driven Development (TDD)

## Was wir brauchen:

- Test runner => z.b. Vitest => `npm i -D vitest`
- API test tool (framework spezifisch )=> z.b. Supertest für Express Testing => `npm i -D supertest`
- eventuell End 2 End test tool => z.B. Cypress (cypress.io) => `npm i -D cypresss`

## Tests laufen lassen

`npm test`
=> startet Vitest

Vitest sucht automatisch nach Dateien mit .test. im Namen und führt diese aus!

Typischerweise sammeln wir alle unsere Test-Dateien in einem "test" Ordner, damit wir sie von unserem sonstigen Code trennen.

## Testing Theorie

Was ist ein...

### Unit Test

Wir testen eine Funktion in unserem Code, die in ihrem Code keine anderen (!) Funktionen von unserem Code aufruft.

### Integration Test

Wir testen eine Funktion in unserem Code, die auch ANDERE Funktionen in unserem Code aufruft => wir testen also "unfreiwillig" auch andere Funktionen in unserem Code mit, bzw.
ob die Funktionen auch ZUSAMMEN funktionieren (=Integration)

Typische Library: supertest

### End 2 End Test

Wir testen ein gesamtes Feature unserer App aus USER-SICHT. 
Es wird dabei ein sogenannter "Headless Browser" gestartet, also ein Browser ohne UI, der einen User simuliert, der etwas in unserer UI macht, z.B. ein Form ausfüllt und submitted.

Typische Library: cypress


Hier ein Output aus GPT für einen typischen Cypress Test:

Klar! Hier ist ein kurzes, typisches Cypress-Beispiel, das:

- Eine Login-Seite besucht
- In Nutzername + Passwort tippt
- Das Formular abschickt
- Prüft, ob danach eine Success-Meldung erscheint

```
describe('Login Form', () => {
  it('logs in successfully and shows success message', () => {
    cy.visit('/login');

    // In Login-Felder tippen
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('supersecure');

    // Abschicken
    cy.get('button[type="submit"]').click();

    // Erfolgsmeldung prüfen
    cy.contains('Login successful').should('be.visible');
  });
});
```

🔎 Hinweise:

`cy.visit('/login')` kann auch eine absolute URL sein, z. B. http://localhost:3000/login.

`cy.contains('Login successful')` findet Elemente basierend auf dem Textinhalt — sehr praktisch.

Falls du stattdessen nach einer CSS-Klasse testen willst, z. B. .success-message, ginge auch:

`cy.get('.success-message').should('contain', 'Login successful');`
