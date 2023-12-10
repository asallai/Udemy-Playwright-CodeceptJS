Feature('My test suite');

Scenario('Should load Example.com website',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#dontexist')
});

Scenario('Should load Example.com website - 2nd test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#dontexist')
});

Scenario('Should load Example.com website - 3rd test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#dontexist')
});
