import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, NavigationBarComponent ],
      imports: [ BrowserModule, NgbModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On create, collapseNavBar should be true', () => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    const navBar = fixture.debugElement.componentInstance;
    expect(navBar.canCollapseNavBar()).toEqual(true);
  });

  it('collapseNavBar should be toglled', () => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    const navBar = fixture.debugElement.componentInstance;
    navBar.toggleNavbar();
    expect(navBar.canCollapseNavBar()).toEqual(false);
  });
});
