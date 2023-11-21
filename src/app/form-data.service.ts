import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formDataList: any[]=[];

  addFormData(formData: any, image: string | null) {
    this.formDataList.push({ ...formData, image });
  }

  getFormDataList() {
    return this.formDataList;
  }

  constructor() { }
}
