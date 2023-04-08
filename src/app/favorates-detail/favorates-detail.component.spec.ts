import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoratesDetailComponent } from './favorates-detail.component';

describe('FavoratesDetailComponent', () => {
  let component: FavoratesDetailComponent;
  let fixture: ComponentFixture<FavoratesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoratesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoratesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
