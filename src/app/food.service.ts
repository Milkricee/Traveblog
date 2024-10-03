import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KcalComponent } from './kcal/kcal.component';

@Injectable({
  providedIn: 'root',

})
export class FoodService {
  constructor(private http: HttpClient) { }

  getFood():  Observable<any> {
    return this.http.get('https://localhost:7239/api/Food');
  }
}