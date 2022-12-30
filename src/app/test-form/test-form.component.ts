import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  genders = ['male','female'];
  submitForm !: FormGroup;


  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
        'username': new FormControl(null, [Validators.required ]),
        'email': new FormControl(null, [Validators.required, Validators.email] ),
        'gender': new FormControl('male'),
    });
  }

  onSubmit( ){

    if(this.submitForm.valid && this.submitForm.touched && this.submitForm.value) {
      var userData = {
        "UserName": this.submitForm.value.username,
        "UserEmail": this.submitForm.value.email,
        "Gender": this.submitForm.value.gender,
      }

      console.log(userData);

      this.http.post(environment.API_URL + 'user', userData).subscribe(res => {
        console.log(res);
      });

    }
    console.log(this.submitForm);
  }

}
