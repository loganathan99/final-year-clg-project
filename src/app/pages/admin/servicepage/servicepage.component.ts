import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.scss'],
})
export class ServicepageComponent implements OnInit {
  user: any;
  id: any;
  uid: any;
  service: any;
  message: any;

  constructor(
    private auth$: AuthService,
    private route$: ActivatedRoute,
    private api$: ApiService
  ) {}

  ngOnInit(): void {
    this.route$.params.subscribe((p) => {
      this.id = p['id'];
      this.uid = p['uid'];
    });
    this.api$.getServiceById(this.id).subscribe((d) => (this.service = d));
    this.api$.getUserById(this.uid).subscribe((d) => (this.user = d));
  }

  sendMessage() {
    this.api$
      .sendMessage(this.id, {
        from: 'Admin',
        time: Date.now(),
        message: this.message,
      })
      .subscribe((d) => this.ngOnInit());
  }
}
