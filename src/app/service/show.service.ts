import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiResponse, MovieResponse} from "@core/response.interface";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData() {
    return this.http.get<MovieResponse[]>(location.origin + '/assets/data/movies.json')
  }

  getData(limit: number=15, pageIndex: number = 0, search?:string):Observable<ApiResponse> {
    let data$ = new BehaviorSubject<ApiResponse>({total_count: 0, data: []});
    this.fetchData().subscribe({
      next: (res) => {
        data$.next({total_count:res.length, data:res.slice(pageIndex*limit,(pageIndex*limit + limit))});
      },
      error: (err) => {
        return data$.next({total_count: 0, data: []});
      }
    });

    return data$.asObservable();
  }
}
