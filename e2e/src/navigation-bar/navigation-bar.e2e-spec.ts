import { NavigationBarComponent } from './navigation-bar.po';
import { browser, logging } from 'protractor';

describe('Navigation bar', () => {
  let page: NavigationBarComponent;

  beforeEach(() => {
    page = new NavigationBarComponent();
  });

  it('should have brand name', () => {
    page.navigateTo();
    expect(page.getBrand()).toEqual('ShopingCart');
  });

  it('should have naviation link "Shoping List"', () => {
    page.navigateTo();
    expect(page.getNavigationLinkOfShoppingList()).toEqual('Shopping List');
  });

  it('should have naviation link "Recipes"', () => {
    page.navigateTo();
    expect(page.getNavigationLinkOfRecipes()).toEqual('Recipes');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
