import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNaviationBar() {
    return element(by.tagName('app-navigation-bar'));
  }
}
