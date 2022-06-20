import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }
  URL = "http://127.0.0.1:3005/operations"

  /** GET operations from the server */
  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.URL)
  }

  /** GET Operation by id. Will 404 if id not found */
  getOperation(id: string): Observable<Operation> {
    return this.http.get<Operation>(`${this.URL}/${id}`)
  }

  /** GET Operation by id. Will 404 if id not found */
  // delOperation(id: string): Observable<Operation> {
  //   return this.http.delete<Operation>(`${this.URL}/${id}`)
  // }

  /** create a new Operation  */
  addOperation(Operation: Operation): Observable<any> {
    console.log('service add')
    return this.http.post<any>(`${this.URL}`, {
      'operationId': Operation.operationId,
      'accountNumber': Operation.accountNumber,
      'type': Operation.type,
      'ammount': Operation.ammount,
      'interest': Operation.interest,
      'payments': Operation.payments,
      'operationDate': Operation.operationDate
    })
  }
}


