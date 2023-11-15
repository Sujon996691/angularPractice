import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupDataSaveInTableComponent } from './form-group-data-save-in-table/form-group-data-save-in-table.component';
import { AnotherPageFormGroupDataSaveInTableComponent } from './another-page-form-group-data-save-in-table/another-page-form-group-data-save-in-table.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'formGroup', component: FormGroupComponent },
  { path: 'FormGroupDataSaveInTable', component:FormGroupDataSaveInTableComponent},
  { path: 'AnotherPageFormGroupDataSaveInTable', component: AnotherPageFormGroupDataSaveInTableComponent},
  { path: 'TableView', component: TableViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
