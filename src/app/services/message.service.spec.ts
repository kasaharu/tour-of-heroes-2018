import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('call the add method', inject([MessageService], (service: MessageService) => {
    service.messages = [];
    service.add('test');
    expect(service.messages).toEqual(['test']);
  }));

  it('call the clear method', inject([MessageService], (service: MessageService) => {
    service.messages = ['hoge'];
    service.clear();
    expect(service.messages).toEqual([]);
  }));
});
