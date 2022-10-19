import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  isLoading = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  snackbar$: any;

  constructor(private api$: ApiService, private auth$: AuthService, private router$: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.api$.login(this.loginForm.value).subscribe(
        (data: any) => {
          if (data.message === 'ok') {
            this.isLoading = false;
            this.auth$.storeToken(data.token);
            this.router$.navigateByUrl('dashboard/home');
          }


          else {
            this.isLoading = false;
            this.errorMessage = data.message;
          }
        }
      )
    }
  }

}

