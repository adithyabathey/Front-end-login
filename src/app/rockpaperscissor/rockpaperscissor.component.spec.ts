import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockpaperscissorComponent } from './rockpaperscissor.component';

describe('RockpaperscissorComponent', () => {
  let component: RockpaperscissorComponent;
  let fixture: ComponentFixture<RockpaperscissorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockpaperscissorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockpaperscissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
