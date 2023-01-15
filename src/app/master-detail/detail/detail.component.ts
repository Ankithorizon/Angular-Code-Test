import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() selectedUser;
  @Output() nameUpdateEvent = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  submitted = false;
  formModel = {
    name: '',
  };

  constructor( private formBuilder: FormBuilder,) { } 
  
  ngOnChanges(): void {
    this.form.get("name").setValue(this.selectedUser.name);
  }

  ngOnInit(): void {
      this.form = this.formBuilder.group(
      {
        name: [
          this.selectedUser!=null ? this.selectedUser.name : '',
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
    
    // call back
    // this will notify parent component that name is updated
    // updated name is passed back from child to parent component
    this.nameUpdateEvent.emit(this.formModel.name);
    
  }

}
