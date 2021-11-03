import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJestComponent } from './test-jest.component';

describe('TestJestComponent', () => {
  let component: TestJestComponent;
  let fixture: ComponentFixture<TestJestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestJestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form validation', () => {
    expect(component.submit('ram', 'mail', 'pswd', 'city')).toBe(true)
  })
  it('form invalid', () => {
    expect(component.submit('', '', 'pswd', 'city')).toBe(false)
  })
});
