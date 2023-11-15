import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPageFormGroupDataSaveInTableComponent } from './another-page-form-group-data-save-in-table.component';

describe('AnotherPageFormGroupDataSaveInTableComponent', () => {
  let component: AnotherPageFormGroupDataSaveInTableComponent;
  let fixture: ComponentFixture<AnotherPageFormGroupDataSaveInTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPageFormGroupDataSaveInTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPageFormGroupDataSaveInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
