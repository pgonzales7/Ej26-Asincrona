import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  apiUser = environment.apiURL + 'users/';


  getUsersAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUser);
  }

  getUserId(userId: string): Observable<Users> {
    const url = this.apiUser + userId;
    return this.http.get<Users>(url);
  } 


  postUser(usuario: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUser, usuario);
  }
}
