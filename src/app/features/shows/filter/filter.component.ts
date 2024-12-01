import {Component, ElementRef, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @HostListener('window:keydown.q', ['$event'])
  search(event: KeyboardEvent) {
    event.preventDefault();
    this.searchTag.nativeElement.focus();
  }
  @Output('updatedFilter')updateFilter = new EventEmitter<string[]>();
  @Output('searchTerm') searchTerm = new EventEmitter<string>();
  @ViewChild('searchTag') searchTag!: ElementRef<HTMLInputElement>;

  filterItems: string[] = [];

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
