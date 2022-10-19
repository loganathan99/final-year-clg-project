import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL = environment.apiUrl;

  // getAllpasses: any;

  constructor(private http$: HttpClient) {}

  login(data: any) {
    return this.http$.post(`${this.apiURL}/users/login`, data);
  }

  signup(data: any) {
    return this.http$.post(`${this.apiURL}/users/signup`, data);
  }

  getUserById(id: string) {
    return this.http$.get(`${this.apiURL}/users/${id}`);
  }

  getServiceById(id: string) {
    return this.http$.get(`${this.apiURL}/users/${id}/service`);
  }
  //createNewPass(id: string, data: any) {
  // return this.http$.post(`${this.apiURL}/users/${id}/newpass`, data);

  //}

  submit(id: string, data: any) {
    return this.http$.post(`${this.apiURL}/users/${id}/newservice`, data);
  }

  sendMessage(id: string, data: any) {
    return this.http$.post(`${this.apiURL}/users/${id}/service/message`, data);
  }

  //Download(id: string, data: any) {
  // return this.http$.post(`${this.apiURL}/users/${id}/download`, data);

  // }

  getAllUsers() {
    return this.http$.get(`${this.apiURL}/users`);
  }
}
