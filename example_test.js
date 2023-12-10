Feature('example');

Scenario('Should load Example.com website',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
});
