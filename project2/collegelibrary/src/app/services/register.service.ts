import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseurl="https://sheetdb.io/api/v1/w6d6svd1h3k7e";

  constructor( private http:HttpClient) { }
  onsubmit(registration:Register):Observable<any>{
    return this.http.post(this.baseurl,registration);

  }
}
  