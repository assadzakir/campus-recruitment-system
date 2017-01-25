import { CampusPage } from './app.po';

describe('campus App', function() {
  let page: CampusPage;

  beforeEach(() => {
    page = new CampusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
