import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor() { }

   static baseUrl="http://localhost:8080/api";
   static postRecord=BaseUrlService.baseUrl+"/v1/records";
}
