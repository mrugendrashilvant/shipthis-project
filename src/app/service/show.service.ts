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

  getData(limit: number=15, pageIndex: number = 0, searchTerm?:string, filterType?: string[]):Observable<ApiResponse> {
    let data$ = new BehaviorSubject<ApiResponse>({total_count: 0, data: []});
    this.fetchData().subscribe({
      next: (res) => {
        let response: ApiResponse = {
          total_count: res.length,
          data: res
        }
        if(filterType && filterType.length > 0){
          response.data = res.filter((single) => filterType.includes(single.type))
          response.total_count = response.data.length;
        }
        if(searchTerm && searchTerm.length > 0){
          let searchedData = response.data.filter(v => v.title == null || String(v.title.toLowerCase()).startsWith( searchTerm.toLowerCase() ));
          response.data = searchedData;
          response.total_count = searchedData.length;
        }
        response.data = response.data.slice(pageIndex*limit,(pageIndex*limit + limit));
        data$.next(response);
      },
      error: (err) => {
        return data$.next({total_count: 0, data: []});
      }
    });

    return data$.asObservable();
  }

  getDataById(id: string): Observable<MovieResponse> {
    let movie = new BehaviorSubject<MovieResponse>({} as MovieResponse);
    this.fetchData().subscribe({
      next: (res) => {
        movie.next(res.find((single)=>single.show_id===id) as MovieResponse)
      }
    });
    return movie;
  }
}
