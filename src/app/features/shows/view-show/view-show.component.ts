import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MovieResponse} from "@core/response.interface";
import {CommonModule} from "@angular/common";
import {OverlayContainer} from "@angular/cdk/overlay";
import {CommonService} from "../../../service/common.service";
import {Subject, takeUntil} from "rxjs";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {EmptyTextPipe} from "@core/pipes/empty-text.pipe";

@Component({
  selector: 'app-view-show',
  standalone: true,
  imports: [
    MatDialogContent,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    EmptyTextPipe
  ],
  templateUrl: './view-show.component.html',
  styleUrl: './view-show.component.scss'
})
export class ViewShowComponent implements OnInit, OnDestroy{
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MovieResponse,
    private overlayContainer: OverlayContainer,
    private commonService: CommonService,
    public dialogRef: MatDialogRef<ViewShowComponent>,
  ) {
  }

  ngOnInit() {

    this.commonService.getCurrentViewMode()
      .pipe(takeUntil(this.destroy$))
      .subscribe((mode) => {
      if(mode === 'light') {
        this.overlayContainer.getContainerElement().classList.remove('darkMode');
      }
      else {
        this.overlayContainer.getContainerElement().classList.add('darkMode');
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
