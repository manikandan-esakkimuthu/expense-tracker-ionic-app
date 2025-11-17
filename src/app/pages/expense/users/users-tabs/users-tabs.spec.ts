import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTabs } from './users-tabs';

describe('UsersTabs', () => {
  let component: UsersTabs;
  let fixture: ComponentFixture<UsersTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
