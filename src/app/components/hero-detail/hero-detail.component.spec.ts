import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../../services/hero.service';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ HeroDetailComponent ],
      providers: [
        { provide: HeroService, useValue: { getHero: () => {} } },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;

    const heroService = TestBed.get(HeroService);
    spyOn(heroService, 'getHero').and.returnValue(of({ id: 11, name: 'Mr. Nice' }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call the getHero method', () => {
    component.getHero(11);
    expect(component.hero.name).toEqual('Mr. Nice');
  });

  it('call the goBack method', () => {
    component.location.go('/path1');
    component.location.go('/path2');

    component.goBack();
    expect(component.location.isCurrentPathEqualTo('/path1')).toBeTruthy();
  });
});
