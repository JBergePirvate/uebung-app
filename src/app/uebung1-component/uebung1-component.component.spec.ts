import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uebung1ComponentComponent } from './uebung1-component.component';

describe('Uebung1ComponentComponent', () => {
  let component: Uebung1ComponentComponent;
  let fixture: ComponentFixture<Uebung1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uebung1ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uebung1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
