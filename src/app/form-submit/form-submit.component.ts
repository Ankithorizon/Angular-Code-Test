import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

import { LocalDataService } from '../services/local-data.service';

import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  form: FormGroup = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  });
  submitted = false;
  formModel = {
    Email: '',
    Password: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    public dataService: DataService,
    public router: Router,
    public localDataService: LocalDataService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        Email: [
          '',
          [
            Validators.required, Validators.email
          ]
        ],
        Password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],      
      },     
    );
  }
 
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  formDataSubmit(): void {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
      
      this.formModel.Email = this.form.value["Email"];
      this.formModel.Password = this.form.value["Password"];

      console.log(this.formModel);       
  }

}
