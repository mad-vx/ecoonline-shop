import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

type RequestParams = HttpParams | Record<string, string | string[]>;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:5249/api/'; 

  public get<T>(url: string, params?: RequestParams): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}${url}`, { params })
      .pipe(catchError((err) => throwError(() => err)));
  }
}