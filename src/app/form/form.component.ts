import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submitted Data:', this.formData);
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
