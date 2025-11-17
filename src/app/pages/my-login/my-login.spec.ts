import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogin } from './my-login';

describe('MyLogin', () => {
  let component: MyLogin;
  let fixture: ComponentFixture<MyLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
