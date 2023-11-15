import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-data-save-in-table',
  templateUrl: './form-group-data-save-in-table.component.html',
  styleUrls: ['./form-group-data-save-in-table.component.css']
})
export class FormGroupDataSaveInTableComponent implements OnInit {
  myForm!: FormGroup;
  dataArray: any[]=[];
  showTable:boolean=false;

  constructor(private fb:FormBuilder) {
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
      this.dataArray.push(this.myForm.value)
      this.myForm.reset();
      this.showTable=true;
      
    }
  }

}
