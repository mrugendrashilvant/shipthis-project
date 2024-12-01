import {AfterViewInit, Component, inject, Input, ViewChild} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule, DatePipe} from "@angular/common";
import {MovieResponse} from "@core/response.interface";
import {catchError, map, of, startWith, switchMap} from "rxjs";
import {ShowService} from "../../../service/show.service";
import {Snake2SentencePipe} from "@core/pipes/snake2-sentence.pipe";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

export interface ColumnDef {
  property: string,
  title: string,
}

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe, CommonModule, Snake2SentencePipe, MatIconModule, MatTooltipModule],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss'
})
export class ShowListComponent implements AfterViewInit {
  _filter!:string[];
  @Input('filter') set filter(data:string[]) {
    this._filter = data;
    setTimeout(()=>{this.getData()},200)
  }
  get filter(): string[] {
    return this._filter;
  }
  displayedColumns: string[] = [
    'type',
    'title', 'director',
    'date_added', 'release_year',
    'rating', 'duration', 'action'
  ];
  data: MovieResponse[] = [];
  isLoadingResults = true;
  resultsLength: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showService = inject(ShowService);

  ngAfterViewInit() {
    this.getData();
  }

  getData() {
    this.paginator?.page.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.showService.getData(15, this.paginator.pageIndex, "", this.filter)
          .pipe(catchError(() => of(null)))
      }),
      map(result => {
        this.isLoadingResults = false;
        if (result) {
          this.resultsLength = result.total_count;
          return result.data;
        }
        return [];
      })
    )
      .subscribe(data => (this.data = data));
  }
}
