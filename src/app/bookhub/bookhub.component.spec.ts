import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookhubComponent } from './bookhub.component';

describe('BookhubComponent', () => {
  let component: BookhubComponent;
  let fixture: ComponentFixture<BookhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
