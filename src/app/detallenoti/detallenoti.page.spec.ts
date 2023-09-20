import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallenotiPage } from './detallenoti.page';

describe('DetallenotiPage', () => {
  let component: DetallenotiPage;
  let fixture: ComponentFixture<DetallenotiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallenotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
