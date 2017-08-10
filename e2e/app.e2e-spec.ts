import { OrodjarPage } from './app.po';

describe('orodjar App', () => {
  let page: OrodjarPage;

  beforeEach(() => {
    page = new OrodjarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
