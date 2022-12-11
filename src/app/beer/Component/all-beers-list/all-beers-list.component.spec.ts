import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBeersListComponent } from './all-beers-list.component';

describe('AllBeersListComponent', () => {
  let component: AllBeersListComponent;
  let fixture: ComponentFixture<AllBeersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBeersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
