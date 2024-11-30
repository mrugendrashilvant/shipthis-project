import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData() {
    return this.http.get<any[]>(location.origin + '/assets/data/movies.json')
  }

  getData(limit: number=15, offset: number = 0):Observable<any[]> {
    let data$ = new BehaviorSubject<any[]>([]);
    this.fetchData().subscribe({
      next: (res) => {
        data$.next(res.slice(offset,offset + limit));
      },
      error: (err) => {
        return data$.next([]);
      }
    });

    return data$.asObservable();
  }
}
