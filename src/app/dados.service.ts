import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  //private readonly API = 'http://10.80.178.32:8080/api/sfc/v1/split?workCenterCode=AS-2701&operationStartDate=2023-06-02'
  private readonly API = 'http://200.206.102.114:8080/api/sfc/v1/split?workCenterCode=AS-2701&operationStartDate=2023-06-05'

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('super:@isin2022_')
    })
  };

  listar(): Observable<any> {
    return this.http.get<any>(this.API,this.httpOptions)
  }

}
