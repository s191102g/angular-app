import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MyServiceService {
    api = 'https://api-by-sang.herokuapp.com/'
constructor(
    public http:HttpClient
) {}
   getAllUsers(endpoin:string): Observable<any> {
     return  this.http.get(this.api+endpoin)
   }

   getAllPrj(endpoin:string): Observable<any> {
    return  this.http.get(this.api+endpoin)
  }

  addPrj(endpoin:string, formData:object): Observable<any> {
      return this.http.post(this.api+endpoin,formData)
  }

  fixPrj(endpoin:string, formData:object): Observable<any> {
    return this.http.put(this.api+endpoin,formData)
  }

  deletePrj(endpoin:string): Observable<any> {
    return this.http.delete(this.api+endpoin)
  }

  getAllTask(endpoin:string): Observable<any> {
    return  this.http.get(this.api+endpoin)
  }


  addTask(endpoin:string, formData:object): Observable<any> {
      return this.http.post(this.api+endpoin,formData)
  }

  fixTask(endpoin:string, formData:object): Observable<any> {
    return this.http.put(this.api+endpoin,formData)
  }

  deleteTask(endpoin:string): Observable<any> {
    return this.http.delete(this.api+endpoin)
  }
}
