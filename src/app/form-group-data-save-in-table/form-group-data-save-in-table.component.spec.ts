import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupDataSaveInTableComponent } from './form-group-data-save-in-table.component';

describe('FormGroupDataSaveInTableComponent', () => {
  let component: FormGroupDataSaveInTableComponent;
  let fixture: ComponentFixture<FormGroupDataSaveInTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupDataSaveInTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupDataSaveInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
