import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any;
  serviceForm: any;
  api$: any;
  snackbar$: any;
  errorMessage: any;

  constructor(private auth$: AuthService) { }

  ngOnInit(): void {
    this.auth$.getLoggedInUser().subscribe(d => this.user = d);
  }
  service() {
    if (this.serviceForm.valid) {
      this.api$.service(this.serviceForm.value).subscribe(
        (d: any) => {
          if (d.message != 'ok') {
            this.errorMessage = d.message
          } else {
            this.snackbar$.open('welcome', 'OK', { duration: 5000 });
            
          }
        }
      )
    }
  }

 

}
