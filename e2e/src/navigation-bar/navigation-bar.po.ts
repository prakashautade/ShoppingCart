import { browser, by, element } from 'protractor';

export class NavigationBarComponent {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getBrand() {
    return element(by.css('.navbar-brand')).getText() as Promise<string>;
  }

  getNavigationLinkOfShoppingList() {
    element(by.css('.navbar-toggler')).click();
    return element(by.id('shoppingList')).getText() as Promise<string>;
  }

  getNavigationLinkOfRecipes() {
    element(by.css('.navbar-toggler')).click();
    return element(by.id('recipes')).getText() as Promise<string>;
  }
}
