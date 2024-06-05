import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('ngClass test case for p tag', () => {
    const element = fixture.debugElement.nativeElement.querySelector("#header");
    expect(element.getAttribute('class')).toContain('font-red');
  });


  it('ngClass test case for h1 tag', () => {
    const element = fixture.debugElement.nativeElement.querySelector("#header1");
    component.num = 5;
    fixture.detectChanges();
    expect(element.getAttribute('class')).toContain('font-blue');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
