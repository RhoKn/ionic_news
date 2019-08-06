import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopHeadlines } from '../models/topHeadlines';
import { environment } from '../../environments/environment.prod';

const headers = new HttpHeaders({
  'X-Api-Key': environment.newsApiKey
}); 

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  pageNum = 0;
  category;

  constructor(private http: HttpClient) { }

  private makeQuery<T>(query: string){
    const fullUrl = environment.baseURL + query;
    return this.http.get<T>(fullUrl, { headers });
  }

  async getTopHeadlines() {
    this.pageNum++;
    return this.makeQuery<TopHeadlines>(`/top-headlines?country=us&page=${this.pageNum}`).toPromise();
  }

  async getByCategory( category: string) {
    if(category == undefined || category !== this.category){
      this.pageNum = 0;
      this.category = category;
    }
    this.pageNum++;
    return this.makeQuery<TopHeadlines>(`/top-headlines?country=us&category=${ category }&page=${this.pageNum}`).toPromise();
  }
}
