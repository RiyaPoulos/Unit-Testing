import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let mockloggerService:any;
  let calculator: CalculatorService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(CalculatorService);
     mockloggerService=jasmine.createSpyObj('loggerService',['log']);
     calculator=new CalculatorService(mockloggerService);
  });


  
  it('add two numbers', () => {
    //let loggerService=new LoggerService();
    //let mockloggerService=jasmine.createSpyObj('loggerService',['log']);
   // spyOn(loggerService,'log');
   //const calculator=new CalculatorService(mockloggerService);

   let result=calculator.add(2,2);
   expect(result).toBe(4);
   expect(mockloggerService.log).toHaveBeenCalledTimes(1);
  });
  it('subtract two numbers', () => {
    //let loggerService=new LoggerService();
    //let mockloggerService=jasmine.createSpyObj('loggerService',['log']);
    //spyOn(loggerService,'log');
    //const calculator=new CalculatorService(mockloggerService);
    let result=calculator.subtract(2,2);
    expect(result).toBe(0);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1);
   });
});
