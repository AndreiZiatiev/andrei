import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  private usersUrl = 'http://localhost:4200/assets/mock-data.json'; 
  constructor(
    private http: HttpClient,
  ) { }
  getUsers(): any {
    let myResponse = this.http.get(this.usersUrl);
    return myResponse; 
  }
}
