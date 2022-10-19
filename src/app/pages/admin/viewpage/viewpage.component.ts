import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  users: any;

  constructor(private api$: ApiService, private router$: Router) { }

  ngOnInit(): void {
    this.api$.getAllUsers().subscribe(d => { this.users = d; });
  }

}
