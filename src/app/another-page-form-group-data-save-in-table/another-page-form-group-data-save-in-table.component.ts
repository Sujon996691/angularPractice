import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-another-page-form-group-data-save-in-table',
  templateUrl: './another-page-form-group-data-save-in-table.component.html',
  styleUrls: ['./another-page-form-group-data-save-in-table.component.css']
})
export class AnotherPageFormGroupDataSaveInTableComponent implements OnInit {
  myForm!: FormGroup;
  dataArray: any[]=[];
  showTable:boolean=false;

  constructor(private fb:FormBuilder, private router:Router, private dataService : DataService) {
    this.myForm=this.fb.group({
      mobile: [''],
      email: [''],
      nid: [''],
      broker: [''],
      boType: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.myForm.valid){
      this.dataService.dataArray.push(this.myForm.value)
      this.myForm.reset();
      this.showTable=true;
      this.router.navigate(['/TableView']);
    }
  }

}
