import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { TableViewComponent } from './table-view/table-view.component';
import { FormGroupDataSaveInTableComponent } from './form-group-data-save-in-table/form-group-data-save-in-table.component';
import { FormDataListComponent } from './form-data-list/form-data-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormGroupComponent,
    FormGroupDataSaveInTableComponent,
    TableViewComponent,
    FormDataListComponent
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
