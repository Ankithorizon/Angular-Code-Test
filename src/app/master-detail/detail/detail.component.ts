import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() selectedUser;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  submitted = false;
  formModel = {
    name: '',
  };

  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required
          ]
        ]  
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
      
      this.formModel.name = this.form.value["name"];

      console.log(this.formModel);       
  }

}
