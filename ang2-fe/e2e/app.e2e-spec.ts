import { GsAngdemoPage } from './app.po';

describe('gs-angdemo App', function() {
  let page: GsAngdemoPage;

  beforeEach(() => {
    page = new GsAngdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
