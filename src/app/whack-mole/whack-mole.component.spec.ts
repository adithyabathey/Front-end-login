import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackMoleComponent } from './whack-mole.component';

describe('WhackMoleComponent', () => {
  let component: WhackMoleComponent;
  let fixture: ComponentFixture<WhackMoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhackMoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhackMoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
