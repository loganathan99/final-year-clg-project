import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  form: any;
  errorMessage: any;

  constructor(private auth$: AuthService, private router$: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  admin() {
    if (
      this.form.value.email == 'loganathan99ramesh@gmail.com' &&
      this.form.value.password == '123456'
    ) {
      this.router$.navigateByUrl('/viewpage');
    } else {
      this.errorMessage = 'Wrong E-Mail/Password';
    }
  }
}
