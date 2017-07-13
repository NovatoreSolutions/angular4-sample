import { ExampleProPage } from './app.po';

describe('example-pro App', () => {
  let page: ExampleProPage;

  beforeEach(() => {
    page = new ExampleProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
