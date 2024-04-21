import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretAreaComponent } from './secret-area.component';

describe('SecretAreaComponent', () => {
  let component: SecretAreaComponent;
  let fixture: ComponentFixture<SecretAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
