import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMessage = '';
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    
   
    
  })
  //fileToUpload: File = null;

  constructor(private api$: ApiService, private router$: Router, private snackbar$: MatSnackBar) { }

  ngOnInit(): void {
  }

  signup() {
    if (this.signupForm.valid) {
      this.api$.signup(this.signupForm.value).subscribe(
        (d: any) => {
           
            this.snackbar$.open('Registration Success', 'OK', { duration: 5000 });
            this.router$.navigateByUrl('/login');
          
        }
      )
    }
  }

 


  }


