import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form-data-list',
  templateUrl: './form-data-list.component.html',
  styleUrls: ['./form-data-list.component.css']
})
export class FormDataListComponent implements OnInit {
  formDataList: any[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.formDataList = this.formDataService.getFormDataList();
  }

}
