import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupAccountService {

  constructor(private http: HttpClient) { }

  getGroupAccounts(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:10101/password-manager/group-account/");
  }

}
