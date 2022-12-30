import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  genders = ['male','female'];
  submitForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
        'username': new FormControl(null, [Validators.required ]),
        'email': new FormControl(null, [Validators.required, Validators.email] ),
        'gender': new FormControl('male'),
    }); 
  }
  
  onSubmit( ){

    console.log(this.submitForm.value);
  }

}
