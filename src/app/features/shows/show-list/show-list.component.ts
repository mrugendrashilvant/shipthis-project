import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule, DatePipe} from "@angular/common";
import {ApiResponse, MovieResponse} from "@core/response.interface";
import {catchError, map, of, startWith, switchMap} from "rxjs";
import {ShowService} from "../../../service/show.service";
import {Snake2SentencePipe} from "@core/pipes/snake2-sentence.pipe";

export interface ColumnDef {
  property: string,
  title: string,
}

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe, CommonModule, Snake2SentencePipe],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss'
})
export class ShowListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'type',
    'title', 'director',
    'date_added', 'release_year',
    'rating', 'duration', 'action'
  ];
  data: MovieResponse[] = [];
  isLoadingResults = true;
  resultsLength: number = 0;
  columnDefs!: ColumnDef[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showService = inject(ShowService);

  ngAfterViewInit() {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.showService.getData(15, this.paginator.pageIndex)
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
