import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Alumni} from "../models/alumni";

const apiUrl = 'http://localhost:8080/api/alumnus';
@Injectable({
  providedIn: 'root'
})
export class AlumnusService {

  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Alumni[]> {
    return this.httpClient.get<Alumni[]>(apiUrl);
  }

  getById(id: number): Observable<Alumni> {
    return this.httpClient.get<Alumni>(`${apiUrl}/${id}`); // apiUrl + '/' + id
  }

  createAlumni(alumni: Alumni): Observable<Alumni> {
    return this.httpClient.post<Alumni>(apiUrl, alumni);
  }

  updateAlumni(alumni: Alumni): Observable<Alumni> {
    return this.httpClient.put<Alumni>(apiUrl, alumni); // apiUrl/id
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/${id}`);
  }

}
