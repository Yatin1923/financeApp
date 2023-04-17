import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CategoryService {

    private baseUrl = 'https://localhost:44338/api/Categorys';


   httpOptions = {

    headers: new HttpHeaders({

      "Content-type": "Application/json",
      'Access-Control-Allow-Origin': '*',
      "ApiKey": "ECBB82291CEF372F0CBC66DD11D66DA5",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    })

  };
   
    constructor( private http: HttpClient) { }
  
    getCategoryDetails(id: string): Observable<any> {
  
      return this.http.get(`${this.baseUrl}/${id}`,this.httpOptions);
    }

    saveCategory(category: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, category,this.httpOptions);
    }
  
    updateCategoryDetails(Id: string, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${Id}`, value,this.httpOptions); 
    }

    deleteCategory(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions);
      }
    
      getCategoryList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`,this.httpOptions); 
      }
    }

