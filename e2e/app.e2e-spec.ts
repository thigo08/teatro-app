import { TeatroAppPage } from './app.po';

describe('teatro-app App', () => {
  let page: TeatroAppPage;

  beforeEach(() => {
    page = new TeatroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
