import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  serviceForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    date: new FormControl(Date.now(), [Validators.required]),
    Plumber: new FormControl(''),
    Electrician: new FormControl(''),
    problem: new FormControl('', [Validators.required]),
    //problem_description: new FormControl('', [Validators.required]),
  });

  // api$: any;
  errorMessage: any;
  // snackbar$: any;
  // router$: any;
  // vaild: any;

  constructor(
    private api$: ApiService,
    private snackbar$: MatSnackBar,
    private router$: Router,
    private auth$: AuthService
  ) {}

  ngOnInit(): void {}
  submit() {
    if (this.serviceForm.valid) {
      this.api$
        .submit(this.auth$.getStoredTokenPayload().id, this.serviceForm.value)
        .subscribe((d: any) => {
          this.snackbar$.open('submit success', 'OK', { duration: 5000 });
          //this.router$.navigateByUrl('/dashboard/home');
        });
    }
  }
}
