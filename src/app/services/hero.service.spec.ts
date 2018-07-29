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

  it('call the updateHero method', inject([HeroService], (service: HeroService) => {
    const targetUrl = 'api/heroes';
    const targetHero = { id: 11, name: 'test' };
    service.updateHero(targetHero).subscribe();
    const req = httpTestingController.expectOne(targetUrl);

    expect(req.request.method).toEqual('PUT');
    expect(req.request.url).toEqual(targetUrl);
    expect(req.request.body).toEqual(targetHero);
  }));

  it('call the addHero method', inject([HeroService], (service: HeroService) => {
    const targetUrl = 'api/heroes';
    const targetHero = { id: null, name: 'New Hero' };
    service.addHero(targetHero).subscribe();
    const req = httpTestingController.expectOne(targetUrl);

    expect(req.request.method).toEqual('POST');
    expect(req.request.url).toEqual(targetUrl);
    expect(req.request.body).toEqual(targetHero);
  }));
});
