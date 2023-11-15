import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupDataSaveInTableComponent } from './form-group-data-save-in-table/form-group-data-save-in-table.component';
import { AnotherPageFormGroupDataSaveInTableComponent } from './another-page-form-group-data-save-in-table/another-page-form-group-data-save-in-table.component';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormGroupComponent,
    FormGroupDataSaveInTableComponent,
    AnotherPageFormGroupDataSaveInTableComponent,
    AnotherPageFormGroupDataSaveInTableComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
