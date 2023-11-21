import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  myForm!: FormGroup;
  dataArray: any[]=[];

  selectedFile: File | null = null;
  imageData: string | ArrayBuffer | null = null;

  constructor(private fb:FormBuilder, private router:Router, private dataService : DataService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      mobile: [''],
      email: [''],
      nid: [''],
      broker: ['Padma Bank Securities Ltd'],
      boType: [''],
      image: [''],
    }); 
  }
  onSubmit(){
    console.log(this.myForm.value);
    console.log('Selected File:', this.selectedFile);

    if(this.myForm.valid){
      this.myForm.patchValue({ image: this.imageData });
      this.dataService.dataArray.push(this.myForm.value)
      this.myForm.reset();
      this.router.navigate(['/TableView']);
    }
  }



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
