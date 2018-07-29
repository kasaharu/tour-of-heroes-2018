import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('call the getHero method', inject([HeroService], (service: HeroService) => {
    const targetUrl = 'api/heroes/11';
    service.getHero(11).subscribe();
    const req = httpTestingController.expectOne(targetUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(targetUrl);
  }));

  it('call the getHeroes method', inject([HeroService], (service: HeroService) => {
    const targetUrl = 'api/heroes';
    service.getHeroes().subscribe();
    const req = httpTestingController.expectOne(targetUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(targetUrl);
  }));
});
