import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData:any={
    broker:"Padma Bank Securities Ltd"
  };
  selectedFile: File | null = null;
  imageData: string | ArrayBuffer | null = null;
  
  
  constructor(private formDataService: FormDataService, private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submitted Data:', this.formData);
    console.log('Selected File:', this.selectedFile);

    const image = this.imageData as string;
    this.formDataService.addFormData(this.formData, image);
    this.router.navigate(['/FormDataList']);
    
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
