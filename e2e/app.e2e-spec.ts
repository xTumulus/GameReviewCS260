import { RetrospectrePage } from './app.po';

describe('retrospectre App', () => {
  let page: RetrospectrePage;

  beforeEach(() => {
    page = new RetrospectrePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
