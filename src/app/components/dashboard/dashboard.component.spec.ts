import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../../services/hero.service';
import { HEROES } from '../../mocks/mock-heroes';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent, HeroSearchComponent],
      providers: [
        { provide: HeroService, useValue: { getHeroes: () => {} } },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    const heroService = TestBed.get(HeroService);
    const dummyHeroes = Object.assign([], HEROES);
    spyOn(heroService, 'getHeroes').and.returnValue(of(dummyHeroes));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call thd getHeroes method', () => {
    const slicedHeroes = [
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
    ];
    component.getHeroes();
    expect(component.heroes).toEqual(slicedHeroes);
  });
});
