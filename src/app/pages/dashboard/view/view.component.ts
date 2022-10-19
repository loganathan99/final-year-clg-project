import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  user: any;
  id: any;
  service: any;
  message: string | undefined;

  constructor(
    private auth$: AuthService,
    private route$: ActivatedRoute,
    private api$: ApiService
  ) {}

  ngOnInit(): void {
    this.route$.params.subscribe((p) => {
      this.id = p['id'];
    });
    this.api$.getServiceById(this.id).subscribe((d) => (this.service = d));
  }

  sendMessage() {
    this.api$
      .sendMessage(this.id, {
        from: 'You',
        time: Date.now(),
        message: this.message,
      })
      .subscribe((d) => this.ngOnInit());
  }
}
