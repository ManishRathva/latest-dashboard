import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) {
    
  }
  callAPI(body: object, type: String, url: string): Observable<any> {

    if (type == 'POST') {
      return this.http.post(url, body);
    } else if (type == 'PUT') {
      return this.http.put(url, body);
    } else if (type == 'DELETE') {
      return this.http.delete(url);
    } else {
      return this.http.get(url);
    }
 
  }
 
  callAPIwithFile(body: object, type: String, url: string): Observable<any> {
    let options = {};
    if (type == 'POST') {
      return this.http.post(url, body, options);
    } else if (type == 'PUT') {
      return this.http.put(url, body, options);
    } else if (type == 'DELETE') {
      return this.http.delete(url, options);
    } else {
      return this.http.get(url, options);
    }
 
  }
}
