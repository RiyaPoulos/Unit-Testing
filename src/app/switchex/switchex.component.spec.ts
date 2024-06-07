import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchexComponent } from './switchex.component';

describe('SwitchexComponent', () => {
  let component: SwitchexComponent;
  let fixture: ComponentFixture<SwitchexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchexComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SwitchexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngSwitch test case', () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
    expect(element.childElementCount).toEqual(1);
    expect(element.children.length).toEqual(1);
    expect(element.children[0].innerHTML).toEqual("one is selected");
  });
  it('ngSwitch test case 1', () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
    component.selectedNum = "Two";
    fixture.detectChanges();
    expect(element.childElementCount).toEqual(1);
    expect(element.children.length).toEqual(1);
    expect(element.children[0].innerHTML).toEqual("Two is selected");
  });
});
