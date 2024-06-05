import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingComponent } from './eventbinding.component';

describe('EventbindingComponent', () => {
  let component: EventbindingComponent;
  let fixture: ComponentFixture<EventbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button 1', () => {
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button1');
    expect(component.label).toEqual("eventbinding");
    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("eventbinding");
  });

  it('textbox 1', () => {
    const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox1');
    expect(component.label).toEqual("eventbinding");
    element.value="label changes";
    element.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    expect(component.label).toEqual("label changes");
  });

});
