import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  private baseUrl = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api';

  constructor(private http: HttpClient) {}

  getHeroes(page = 1, size = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}/heroes?page=${page}&size=${size}`);
  }

  getHeroById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/hero?id=${id}`);
  }
}
