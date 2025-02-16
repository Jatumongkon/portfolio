import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  getAboutInfo(): Observable<any>{
    // return this.http.get<any>('https://http.dog/200.json');
    return  this.http.get<any>('http://localhost:8000/hello');
    // return  this.http.get<any>('https://http.dog/200.json');
    //return  this.http.get<any>('https://http.dog/200.json');
  }

  getHello(){
    this.http.get('http://localhost:8000/hello').subscribe(data =>{
      console.log(data);

    })
  }


}
