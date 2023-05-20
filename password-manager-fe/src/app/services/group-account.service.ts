import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupAccountService {

  constructor(private http: HttpClient) { }

  getGroupAccounts(): Observable<string[]> {
    console.log(environment.production);
    return this.http.get<string[]>(environment.apiUrlWithContextPath + "group-account/");
  }

}
