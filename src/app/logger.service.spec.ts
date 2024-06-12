import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
   service=new LoggerService();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('show zero count in the initial time', () => {
   //const service=new LoggerService();
   let count=service.messages.length;
   expect(count).toBe(0);
  });

  it('show the count if there is an messgae', () => {
  
    service.log('message');
    expect(service.messages.length).toBe(1);
  });

  it('show the clear messgae when clear function called', () => {
   // const service=new LoggerService();
   //called i before each method
    service.log('message');
    service.clear()
    expect(service.messages.length).toBe(0);
  });
});
