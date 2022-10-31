import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTypesComponent } from './hero-types.component';

describe('HeroTypesComponent', () => {
  let component: HeroTypesComponent;
  let fixture: ComponentFixture<HeroTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
