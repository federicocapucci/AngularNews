import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(params: any): Observable<any> {

    params.apiKey = '80121c9ffbd14b0d951c0625c153fbfb'

    const URL = 'https://newsapi.org/v2/top-headlines?country=' + params.country + '&category=' + params.category + '&apiKey=' + params.apiKey

    return this.http.get(URL)

  }
}
