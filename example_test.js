Feature('example');

Scenario('Should load Example.com website',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#dontexist')
});
