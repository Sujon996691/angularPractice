import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { TableViewComponent } from './table-view/table-view.component';
import { FormGroupDataSaveInTableComponent } from './form-group-data-save-in-table/form-group-data-save-in-table.component';
import { FormDataListComponent } from './form-data-list/form-data-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/Form', pathMatch: 'full' },
  { path: 'Form', component: FormComponent },
  { path: 'FormGroup', component: FormGroupComponent },
  { path: 'FormGroupDataSaveInTable', component:FormGroupDataSaveInTableComponent},
  { path: 'TableView', component: TableViewComponent },
  { path: 'FormDataList', component: FormDataListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
