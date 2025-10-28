import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {
  url:string="http://localhost:3000/users";

  constructor(private http : HttpClient){}

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  saveUsers(user:User) : Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(this.url+"/"+id);
  }

  getSelectedUser(id:string):Observable<User>{
    return this.http.get<User>(this.url+"/"+id);
  }

  updateUser(user:User): Observable<User>{
    return this.http.put<User>(this.url+"/"+user.id, user);
  }
  


  
}
