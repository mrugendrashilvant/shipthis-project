import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{
  @HostListener('window:keydown.q', ['$event'])
  search(event: KeyboardEvent) {
    event.preventDefault();
    this.searchTag.nativeElement.focus();
  }
  @Output('updatedFilter')updateFilter = new EventEmitter<string[]>();
  @Output('searchTerm') searchTerm = new EventEmitter<string>();
  @ViewChild('searchTag') searchTag!: ElementRef<HTMLInputElement>;
  searchTerm$ = new Subject<string>();

  filterItems: string[] = [];

  ngOnInit() {
    this.searchTerm$.pipe(
      debounceTime(500),
    )
      .subscribe((value)=>{
        this.searchTerm.emit(value);
      });
  }

  onChange(ev: any) {
    this.searchTerm$.next(ev.target.value);
  }

  editFilter(type: 'Movie' | 'TV Show') {
    let idx = this.filterItems.indexOf(type);
    if(idx > -1) {
      this.filterItems.splice(idx, 1);
    }
    else {
      this.filterItems.push(type);
    }
    this.updateFilter.emit(this.filterItems);
  }
}
