import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  viewMode$ = new BehaviorSubject<string>('light');

  setViewMode(mode: 'light' | 'dark'): void {
    this.viewMode$.next(mode);
  }

  getCurrentViewMode() {
    return this.viewMode$;
  }
}
