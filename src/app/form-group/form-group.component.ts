import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  myForm!: FormGroup;
  selectedFile: File | null = null;
  imageData: string | ArrayBuffer | null = null;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nid: ['', Validators.required],
      broker: ['', Validators.required],
      boType: ['', Validators.required],
    });
  }
  onSubmit(){
    console.log(this.myForm.value);
    console.log('Selected File:', this.selectedFile);
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
