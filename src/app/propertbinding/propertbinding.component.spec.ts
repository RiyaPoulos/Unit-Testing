import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertbindingComponent } from './propertbinding.component';

describe('PropertbindingComponent', () => {
  let component: PropertbindingComponent;
  let fixture: ComponentFixture<PropertbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('interpolation test for textbox',() =>{

    const inputval:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#usenum');
    expect(inputval.type).toEqual(component.type);
    component.type="text";
    fixture.detectChanges();
    expect(inputval.type).toEqual(component.type);
    expect(inputval.readOnly).toBeFalsy();
  })
});
