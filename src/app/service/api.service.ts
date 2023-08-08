import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from './base-url.service';
import { Token } from '@angular/compiler';
import { RecordI } from '../model/records.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  baseUrl="http://localhost:8080/api/v1"

  saveContact(record:any){
    // let token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4eXpAZ21haWwuY29tIiwiaWF0IjoxNjkxMzA5NjU4LCJleHAiOjE2OTEzMTEwOTh9.6AZKpmX1fibQx6vSc_d-krBNWhV4KoDQzAeWvBd7fsc"
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}` // Include the JWT token in the 'Authorization' header
    // });
    return this.http.post(this.baseUrl+'/records',record,{
      observe:'response'
    },
    );
  }

  login(cread:any){

    return this.http.post(this.baseUrl+'/auth/authentication',cread,{
      observe:'response'
    })

  }

  getRecordByDate(date:String|null){
     let token=localStorage.getItem("pmToken");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Include the JWT token in the 'Authorization' header
    });
    let url=this.baseUrl+"/records/by-date?date="+date
    return this.http.get<RecordI[]>(url,{
      headers:headers,
      observe:'body'
    })
  }

  
}
