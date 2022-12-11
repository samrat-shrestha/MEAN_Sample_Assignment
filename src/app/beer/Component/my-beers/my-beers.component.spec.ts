import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBeersComponent } from './my-beers.component';

describe('MyBeersComponent', () => {
  let component: MyBeersComponent;
  let fixture: ComponentFixture<MyBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
